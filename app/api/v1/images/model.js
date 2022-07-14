const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let imageSchema = new Schema(
    {
        name: String,
    },
    { timestamps: true }
);

module.exports = model("Image", imageSchema);
