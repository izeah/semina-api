const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let orderSchema = Schema(
    {
        date: {
            type: Date,
            required: [true, "Tanggal dan waktu harus diisi"],
        },
        status: {
            type: String,
            enum: {
                values: ["DRAFT", "PUBLISHED"], // todo: status order
                message:
                    "Status event harus diisi dengan nilai 'DRAFT' atau 'PUBLISHED'",
            },
            default: "Draft",
        },
        totalPay: {
            type: Number,
            default: 0,
        },
        totalOrderTicket: {
            type: Number,
            default: 0,
        },
        event: {
            type: mongoose.Types.ObjectId,
            ref: "Event",
            required: true,
        },
        personalDetail: Object,
    },
    { timeStamps: true }
);

module.exports = model("Order", orderSchema);
