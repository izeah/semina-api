const Talents = require("../../api/v1/talents/model");
const { checkImage, deleteImage } = require("./images");
const { NotFoundError, BadRequestError } = require("../../errors");

const getAllTalents = async (req) => {
    const { keyword } = req.query;

    let condition = { organizer: req.user.organizer };

    if (keyword) {
        condition = { ...condition, name: { $regex: keyword, $options: "i" } };
    }

    const result = await Talents.find(condition)
        .populate({
            path: "image",
            select: "_id name",
        })
        .populate({
            path: "organizer",
            select: "_id organizer",
        })
        .select("_id name role image organizer");

    return result;
};

const createTalents = async (req) => {
    const { name, role, image } = req.body;

    await checkImage(image);

    const check = await Talents.findOne({
        name,
        organizer: req.user.organizer,
    });

    if (check) throw new BadRequestError("Pembicara sudah terdaftar");

    const result = await Talents.create({
        name,
        image,
        role,
        organizer: req.user.organizer,
    });

    return result;
};

const getOneTalents = async (req) => {
    const { id } = req.params;

    const result = await Talents.findOne({
        _id: id,
        organizer: req.user.organizer,
    })
        .populate({ path: "image", select: "_id name" })
        .populate({
            path: "organizer",
            select: "_id organizer",
        })
        .select("_id name role image organizer");

    if (!result)
        throw new NotFoundError(`Tidak ada pembicara dengan id : ${id}`);

    return result;
};

const checkTalents = async (id) => {
    const result = await Talents.findOne({ _id: id });

    if (!result)
        throw new NotFoundError(`Tidak ada pembicara dengan id : ${id}`);

    return result;
};

const updateTalents = async (req) => {
    const { id } = req.params;
    const { name, role, image } = req.body;

    await checkImage(image);

    const check = await Talents.findOne({
        name,
        organizer: req.user.organizer,
        _id: { $ne: id },
    });

    if (check) throw new BadRequestError("Pembicara sudah terdaftar");

    const result = await Talents.findOne({ _id: id });

    if (!result)
        throw new NotFoundError(`Tidak ada pembicara dengan id : ${id}`);

    // delete talent's previous image if data is updated
    await deleteImage(result.image);

    await result.update(
        { name, image, role, organizer: req.user.organizer },
        { new: true, runValidators: true }
    );

    return result;
};

const deleteTalents = async (req) => {
    const { id } = req.params;

    const result = await Talents.findOne({
        _id: id,
        organizer: req.user.organizer,
    });

    if (!result)
        throw new NotFoundError(`Tidak ada pembicara dengan id : ${id}`);

    await result.remove();

    await deleteImage(result.image);

    return result;
};

module.exports = {
    getAllTalents,
    createTalents,
    getOneTalents,
    checkTalents,
    updateTalents,
    deleteTalents,
};
