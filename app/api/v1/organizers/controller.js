const {
    createOrganizers,
    createUsers,
    getAllUsers,
} = require("../../../services/mongoose/users");

const { StatusCodes } = require("http-status-codes");

const createCMSOrganizer = async (req, res, next) => {
    try {
        const result = await createOrganizers(req);

        return res.status(StatusCodes.CREATED).json({ data: result });
    } catch (err) {
        next(err);
    }
};

const createCMSUser = async (req, res, next) => {
    try {
        const result = await createUsers(req);

        return res.status(StatusCodes.CREATED).json({ data: result });
    } catch (err) {
        next(err);
    }
};

const getAllCMSUsers = async (req, res, next) => {
    try {
        const result = await getAllUsers(req);

        return res.status(StatusCodes.OK).json({ data: result });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createCMSOrganizer,
    createCMSUser,
    getAllCMSUsers,
};
