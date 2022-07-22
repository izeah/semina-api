const {
    getAllPayments,
    createPayments,
    getOnePayments,
    updatePayments,
    deletePayments,
} = require("../../../services/mongoose/payments");

const { StatusCodes } = require("http-status-codes");

const create = async (req, res, next) => {
    try {
        const result = await createPayments(req);

        return res.status(StatusCodes.CREATED).json({ data: result });
    } catch (err) {
        next(err);
    }
};

const index = async (req, res, next) => {
    try {
        const result = await getAllPayments(req);

        return res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const find = async (req, res, next) => {
    try {
        const result = await getOnePayments(req);

        return res.status(StatusCodes.OK).json({ data: result });
    } catch (err) {
        next(err);
    }
};

const update = async (req, res, next) => {
    try {
        const result = await updatePayments(req);

        return res.status(StatusCodes.OK).json({ data: result });
    } catch (err) {
        next(err);
    }
};

const destroy = async (req, res, next) => {
    try {
        const result = await deletePayments(req);

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
