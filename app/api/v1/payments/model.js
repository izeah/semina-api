const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let paymentSchema = Schema(
    {
        name: {
            type: String,
            required: [true, "Nama harus diisi"],
        },
        status: {
            type: Boolean,
            enum: {
                values: [true, false],
                message: "Status harus diisi dengan nilai 'true' atau 'false' ",
            },
            default: true,
        },
        image: {
            type: mongoose.Types.ObjectId,
            ref: "Image",
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = model("Payment", paymentSchema);
