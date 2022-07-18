const Participants = require("../../api/v1/participants/model");
const Events = require("../../api/v1/events/model");
const Orders = require("../../api/v1/orders/model");
const { otpMail } = require("../mail");
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
    const result = await Events.find({ statusEvent: "Published" })
        .populate("category")
        .populate("image")
        .select("_id title date tickets venueName");

    return result;
};

const getOneEvent = async (req) => {
    const result = await Events.findOne({ _id: req.params.id })
        .populate("category")
        .populate("talent")
        .populate("image");

    return result;
};

const getAllOrders = async (req) => {
    const result = await Orders.find({ participant: req.participant.id });
    return result;
};

module.exports = {
    signupParticipant,
    activateParticipant,
    signinParticipant,
    getAllEvents,
    getOneEvent,
    getAllOrders,
};
