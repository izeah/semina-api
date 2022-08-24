const Participants = require("../../api/v1/participants/model");
const Events = require("../../api/v1/events/model");
const Orders = require("../../api/v1/orders/model");
const Payments = require("../../api/v1/payments/model");
const { otpMail, invoiceMail } = require("../mail");
const {
    BadRequestError,
    NotFoundError,
    Unauthorized,
} = require("../../errors");

const signupParticipant = async (req) => {
    const { firstName, lastName, email, password, role } = req.body;

    let result = await Participants.findOne({
        email,
        status: "nonaktif",
    });

    if (result) {
        result.firstName = firstName;
        result.lastName = lastName;
        result.role = role;
        result.email = email;
        result.password = password;
        result.otp = Math.floor(Math.random() * 9999);

        await result.save();
    } else {
        result = await Participants.create({
            firstName,
            lastName,
            email,
            password,
            role,
            otp: Math.floor(Math.random() * 9999),
        });
    }
    await otpMail(email, result);

    delete result._doc.password;
    delete result._doc.otp;

    return result;
};

const activateParticipant = async (req) => {
    const { otp, email } = req.body;
    const check = await Participants.findOne({
        email,
    });

    if (!check) throw new NotFoundError("Partisipan belum terdaftar");

    if (check && check.otp !== otp) throw new BadRequestError("Kode otp salah");

    const result = await Participants.findByIdAndUpdate(
        check._id,
        {
            status: "aktif",
        },
        {
            new: true,
        }
    );

    delete result._doc.password;

    return result;
};

const signinParticipant = async (req) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new BadRequestError("Please provide email and password");
    }

    let result = await Participants.findOne({ email: email });

    if (!result) {
        throw new Unauthorized("Invalid Credentials");
    }

    if (result.status === "nonaktif") {
        throw new Unauthorized("Akun anda belum aktif");
    }

    const isPasswordCorrect = await result.comparePassword(password);

    if (!isPasswordCorrect) {
        throw new Unauthorized("Password salah");
    }

    // generate JWT Token
    const token = result.generateToken();

    // convert user model schema to JSON Object
    result = result.toObject();

    // delete password on response
    delete result.password;
    result.token = token;

    return result;
};

const getAllEvents = async (req) => {
    const result = await Events.find({ statusEvent: "PUBLISHED" })
        .populate("category")
        .populate("image")
        .select("_id title date tickets venueName");

    return result;
};

const getOneEvent = async (req) => {
    const result = await Events.findOne({ _id: req.params.id })
        .populate("category")
        .populate({ path: "talent", populate: { path: "image" } })
        .populate("image");

    return result;
};

const getAllOrders = async (req) => {
    const result = await Orders.find({
        participant: req.participant.id,
    }).populate("historyEvent.image");
    return result;
};

/**
 * Tugas Send email invoice
 * TODO: Ambil data email dari personal detail
 *  */
const checkoutOrder = async (req) => {
    const { event, personalDetail, payment, tickets } = req.body;

    const checkEvent = await Events.findOne({ _id: event });
    if (!checkEvent) {
        throw new NotFoundError("Tidak ada acara dengan id : " + event);
    }

    const checkPayment = await Payments.findOne({ _id: payment });
    if (!checkPayment) {
        throw new NotFoundError(
            "Tidak ada metode pembayaran dengan id : " + payment
        );
    }

    let totalPay = 0,
        totalOrderTicket = 0;
    await tickets.forEach((tic) => {
        checkEvent.tickets.forEach((ticket) => {
            if (tic.ticketCategories.type === ticket.type) {
                if (tic.sumTicket > ticket.stock) {
                    throw new BadRequestError(
                        "Stok tiket event tidak mencukupi"
                    );
                }

                ticket.stock -= tic.sumTicket;
                totalOrderTicket += tic.sumTicket;
                totalPay += tic.ticketCategories.price * tic.sumTicket;
            }
        });
    });

    await checkEvent.save();

    const historyEvent = {
        title: checkEvent.title,
        date: checkEvent.date,
        about: checkEvent.about,
        tagline: checkEvent.tagline,
        keyPoint: checkEvent.keypoint,
        venueName: checkEvent.venueName,
        image: checkEvent.image,
        category: checkEvent.category,
        talent: checkEvent.talent,
        organizer: checkEvent.organizer,
    };

    const result = new Orders({
        date: new Date(),
        personalDetail,
        totalPay,
        totalOrderTicket,
        orderItems: tickets,
        participant: req.participant.id,
        event,
        historyEvent,
        payment,
    });

    await result.save();

    // binding data with html template
    const orderItems = result.orderItems.map((item) => {
        return {
            ticketCategories: item.ticketCategories,
            sumTicket: item.sumTicket,
            subTotalPrice: item.sumTicket * item.ticketCategories.price,
        };
    });

    const htmlData = {
        clientName:
            (result.personalDetail.firstName || "") +
            " " +
            (result.personalDetail.lastName || ""),
        invoiceDate: new Date(result.date).toDateString(),
        id: result._doc._id,
        orderItems,
        totalPay: result.totalPay,
        totalOrderTicket: result.totalOrderTicket,
        payment: checkPayment.type,
    };

    // TODO: kirim email di sini
    await invoiceMail(result.personalDetail.email, htmlData);

    return result;
};

module.exports = {
    signupParticipant,
    activateParticipant,
    signinParticipant,
    getAllEvents,
    getOneEvent,
    getAllOrders,
    checkoutOrder,
};
