const {
    getAllCategories,
    getOneCategories,
    updateCategories,
    createCategories,
    deleteCategories,
} = require("../../../services/mongoose/categories");

const { StatusCodes } = require("http-status-codes");

const create = async (req, res, next) => {
    try {
        const result = await createCategories(req);

        return res.status(StatusCodes.CREATED).json({ data: result });
    } catch (err) {
        next(err);
    }
};

const index = async (req, res, next) => {
    try {
        const result = await getAllCategories(req);

        return res.status(StatusCodes.OK).json({
            data: {
                datas: result.data,
                pages: result.pages,
                total: result.total,
            },
        });
    } catch (err) {
        next(err);
    }
};

const find = async (req, res, next) => {
    try {
        const result = await getOneCategories(req);

        return res.status(StatusCodes.OK).json({ data: result });
    } catch (err) {
        next(err);
    }
};

const update = async (req, res, next) => {
    try {
        const result = await updateCategories(req);

        return res.status(StatusCodes.OK).json({ data: result });
    } catch (err) {
        next(err);
    }
};

const destroy = async (req, res, next) => {
    try {
        const result = await deleteCategories(req);

        return res.status(StatusCodes.OK).json({ data: result });
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
