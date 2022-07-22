const {
    getAllTalents,
    createTalents,
    getOneTalents,
    updateTalents,
    deleteTalents,
} = require("../../../services/mongoose/talents");

const { StatusCodes } = require("http-status-codes");

const create = async (req, res, next) => {
    try {
        const result = await createTalents(req);

        return res.status(StatusCodes.CREATED).json({ data: result });
    } catch (err) {
        next(err);
    }
};

const index = async (req, res, next) => {
    try {
        const result = await getAllTalents(req);

        return res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const find = async (req, res, next) => {
    try {
        const result = await getOneTalents(req);

        return res.status(StatusCodes.OK).json({ data: result });
    } catch (err) {
        next(err);
    }
};

const update = async (req, res, next) => {
    try {
        const result = await updateTalents(req);

        return res.status(StatusCodes.OK).json({ data: result });
    } catch (err) {
        next(err);
    }
};

const destroy = async (req, res, next) => {
    try {
        const result = await deleteTalents(req);

        return res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    index,
    find,
    create,
    update,
    destroy,
};
