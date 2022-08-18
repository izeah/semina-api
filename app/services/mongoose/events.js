const Events = require("../../api/v1/events/model");
const { checkImage, deleteImage } = require("./images");
const { checkCategories } = require("./categories");
const { checkTalents } = require("./talents");
const { NotFoundError, BadRequestError } = require("../../errors");

const getAllEvents = async (req) => {
    const { title, category, talent, status, page = 1, limit = 10 } = req.query;

    let condition = { organizer: req.user.organizer };

    if (title) {
        condition = { ...condition, title: { $regex: title, $options: "i" } };
    }

    if (category) {
        condition = { ...condition, category: { $in: category } };
    }

    if (talent) {
        condition = { ...condition, talent: { $in: talent } };
    }

    if (status) {
        if (["DRAFT", "PUBLISHED"].includes(status.toUpperCase())) {
            condition = { ...condition, statusEvent: status.toUpperCase() };
        }
    }

    const result = await Events.find(condition)
        .populate({
            path: "category",
            select: "_id name",
        })
        .populate({
            path: "image",
            select: "_id name",
        })
        .populate({
            path: "talent",
            select: "_id name role image",
            populate: { path: "image", select: "_id name" },
        })
        .populate({
            path: "organizer",
            select: "_id organizer",
        })
        .limit(limit)
        .skip((page - 1) * limit);

    const count = await Events.countDocuments(condition);

    return { data: result, pages: Math.ceil(count / limit), total: count };
};

const createEvents = async (req) => {
    const {
        title,
        date,
        about,
        tagline,
        keypoint,
        venueName,
        statusEvent,
        category,
        image,
        talent,
        tickets,
    } = req.body;

    await checkImage(image);
    await checkCategories(category);
    await checkTalents(talent);

    const check = await Events.findOne({ title });

    if (check) throw new BadRequestError("Judul event sudah terdaftar");

    const result = await Events.create({
        title,
        date,
        about,
        tagline,
        keypoint,
        venueName,
        statusEvent,
        category,
        image,
        talent,
        tickets,
        organizer: req.user.organizer,
    });

    return result;
};

const getOneEvents = async (req) => {
    const { id } = req.params;

    const result = await Events.findOne({
        _id: id,
        organizer: req.user.organizer,
    })
        .populate({
            path: "category",
            select: "_id name",
        })
        .populate({
            path: "image",
            select: "_id name",
        })
        .populate({
            path: "talent",
            select: "_id name role image",
            populate: { path: "image", select: "_id name" },
        })
        .populate({
            path: "organizer",
            select: "_id organizer",
        });

    if (!result) throw new NotFoundError(`Tidak ada event dengan id : ${id}`);

    return result;
};

const updateEvents = async (req) => {
    const { id } = req.params;
    const {
        title,
        date,
        about,
        tagline,
        keypoint,
        venueName,
        statusEvent,
        category,
        image,
        talent,
        tickets,
    } = req.body;

    await checkImage(image);
    await checkCategories(category);
    await checkTalents(talent);

    const check = await Events.findOne({
        title,
        organizer: req.user.organizer,
        _id: { $ne: id },
    });

    if (check) throw new BadRequestError("judul event sudah terdaftar");

    const result = await Events.findOne({ _id: id });

    if (!result) throw new NotFoundError(`Tidak ada event dengan id : ${id}`);

    // delete event's previous image if data is updated
    if (result.image != image) {
        await deleteImage(result.image);
    }

    await result.update(
        {
            title,
            date,
            about,
            tagline,
            keypoint,
            venueName,
            statusEvent,
            category,
            image,
            talent,
            tickets,
            organizer: req.user.organizer,
        },
        { new: true, runValidators: true }
    );

    return result;
};

const updateStatusEvents = async (req) => {
    const { id } = req.params;
    const { statusEvent } = req.body;

    const result = await Events.findOneAndUpdate(
        { _id: id, organizer: req.user.organizer },
        {
            statusEvent: statusEvent,
        },
        { new: true, runValidators: true }
    );

    if (!result) throw new NotFoundError(`Tidak ada event dengan id : ${id}`);

    return result;
};

const deleteEvents = async (req) => {
    const { id } = req.params;

    const result = await Events.findOne({
        _id: id,
        organizer: req.user.organizer,
    });

    if (!result) throw new NotFoundError(`Tidak ada event dengan id : ${id}`);

    await result.remove();

    await deleteImage(result.image);

    return result;
};

module.exports = {
    getAllEvents,
    createEvents,
    getOneEvents,
    updateEvents,
    updateStatusEvents,
    deleteEvents,
};
