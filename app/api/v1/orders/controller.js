const { getAllOrders } = require("../../../services/mongoose/orders");

const { StatusCodes } = require("http-status-codes");

const index = async (req, res, next) => {
    try {
        const result = await getAllOrders(req);

        return res.status(StatusCodes.OK).json({
            data: {
                datas: result.datas,
                pages: result.pages,
                total: result.total,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    index,
};
