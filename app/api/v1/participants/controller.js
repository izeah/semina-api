const {
    signupParticipant,
    activateParticipant,
    signinParticipant,
    getAllPayments,
    getAllEvents,
    getOneEvent,
    getAllOrders,
    checkoutOrder,
} = require("../../../services/mongoose/participants");

const { StatusCodes } = require("http-status-codes");

const signup = async (req, res, next) => {
    try {
        const result = await signupParticipant(req);

        return res.status(StatusCodes.CREATED).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const activeParticipant = async (req, res, next) => {
    try {
        const result = await activateParticipant(req);

        return res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const signin = async (req, res, next) => {
    try {
        const result = await signinParticipant(req);

        return res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const getPayments = async (req, res, next) => {
    try {
        const result = await getAllPayments(req);

        return res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const getAllLandingPage = async (req, res, next) => {
    try {
        const result = await getAllEvents(req);

        return res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const getDashboard = async (req, res, next) => {
    try {
        const result = await getAllOrders(req);

        return res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const getDetailLandingPage = async (req, res, next) => {
    try {
        const result = await getOneEvent(req);

        return res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const checkout = async (req, res, next) => {
    try {
        const result = await checkoutOrder(req);

        return res.status(StatusCodes.OK).json({ data: result });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    signup,
    activeParticipant,
    signin,
    getPayments,
    getAllLandingPage,
    getDetailLandingPage,
    getDashboard,
    checkout,
};
