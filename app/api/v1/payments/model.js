const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let paymentSchema = Schema(
    {
        type: {
            type: String,
            required: [true, "Tipe pembayaran harus diisi"],
            minLength: [3, "Tipe karyawan harus diisi minimal 3 karakter"],
            maxLength: [50, "Tipe karyawan harus diisi maksimal 50 karakter"],
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
        organizer: {
            type: mongoose.Types.ObjectId,
            ref: "Organizer",
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = model("Payment", paymentSchema);
