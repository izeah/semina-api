const Images = require("../../api/v1/images/model");
const { NotFoundError } = require("../../errors");
const { unlink } = require("fs/promises");

const createImages = async (req) => {
    const result = await Images.create({
        name: req.file
            ? `uploads/${req.file.filename}`
            : `uploads/avatar/default.png`,
    });

    return result;
};

const checkImage = async (id) => {
    const result = await Images.findOne({ _id: id });

    if (!result) throw new NotFoundError(`Tidak ada gambar dengan id : ${id}`);

    return result;
};

const deleteImage = async (id) => {
    const result = await Images.findOne({ _id: id });

    if (!result) throw new NotFoundError(`Tidak ada gambar dengan id : ${id}`);

    const imgDir = `${__dirname}/../../../public/${result.name}`;
    await unlink(imgDir);

    await result.remove();

    return result;
};

module.exports = { createImages, checkImage, deleteImage };
