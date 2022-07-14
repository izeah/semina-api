const Payments = require("../../api/v1/payments/model");
const { checkImage } = require("./images");
const { NotFoundError, BadRequestError } = require("../../errors");

const getAllPayments = async (req) => {
    const { name } = req.query;

    let condition = {};

    if (name) {
        condition = { ...condition, name: { $regex: name, $options: "i" } };
    }

    const result = await Payments.find(condition).populate({
        path: "image",
        select: "_id name",
    });

    return result;
};

const createPayments = async (req) => {
    const { name, image } = req.body;

    await checkImage(image);

    const check = await Payments.findOne({ name });

    if (check) throw new BadRequestError("Nama payment duplikat");

    const result = await Payments.create({ name, image });

    return result;
};

const getOnePayments = async (req) => {
    const { id } = req.params;

    const result = await Payments.findOne({ _id: id }).populate({
        path: "image",
        select: "_id name",
    });

    if (!result) throw new NotFoundError(`Tidak ada payment dengan id : ${id}`);

    return result;
};

const updatePayments = async (req) => {
    const { id } = req.params;
    const { name, image } = req.body;

    await checkImage(image);

    const check = await Payments.findOne({ name, _id: { $ne: id } });

    if (check) throw new BadRequestError("Nama payment duplikat");

    const result = await Payments.findOneAndUpdate(
        { _id: id },
        { name, image },
        { new: true, runValidators: true }
    );

    if (!result) throw new NotFoundError(`Tidak ada payment dengan id : ${id}`);

    return result;
};

const deletePayments = async (req) => {
    const { id } = req.params;

    const result = await Payments.findOne({ _id: id });

    if (!result) throw new NotFoundError(`Tidak ada payment dengan id : ${id}`);

    await result.remove();

    return result;
};

module.exports = {
    getAllPayments,
    createPayments,
    getOnePayments,
    updatePayments,
    deletePayments,
};
