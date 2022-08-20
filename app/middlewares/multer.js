const multer = require("multer");
const slugify = require("slugify");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads/");
    },
    filename: function (req, file, cb) {
        let filename =
            Math.floor(Math.random() * 999999999) +
            "-" +
            slugify(file.originalname, "_");

        cb(null, filename);
    },
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg"
    ) {
        cb(null, true);
    } else {
        cb({ message: "unsupported file format" }, false);
    }
};

const uploadMiddleware = multer({
    storage,
    limits: {
        fileSize: 3000000,
    },
    fileFilter,
});

module.exports = uploadMiddleware;
