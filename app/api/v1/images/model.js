const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const { BadRequestError } = require("../../../errors");

let imageSchema = new Schema(
    {
        name: String,
    },
    { timestamps: true }
);

imageSchema.pre("findOne", function (next) {
    const Image = this;
    let isValid = mongoose.Types.ObjectId.isValid(
        Image._id || Image._conditions._id
    );

    if (!isValid) {
        next(new BadRequestError("Harap sertakan Image yang valid"));
    }

    next();
});

module.exports = model("Image", imageSchema);
