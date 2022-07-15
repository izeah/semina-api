const mongoose = require("mongoose");
const { model, Schema } = mongoose;

ticketCategorySchema = Schema({
    type: {
        type: String,
        required: [true, "Tipe tiket harus diisi"],
    },
    price: {
        type: Number,
        default: 0,
    },
    stock: {
        type: Number,
        default: 0,
    },
    statusTicketCategory: {
        type: Boolean,
        enum: [true, false],
        default: true,
    },
    expiredAt: Date,
});

let eventSchema = Schema(
    {
        title: {
            type: String,
            required: [true, "Judul harus diisi"],
            minLength: [3, "Panjang judul minimal 3 karakter"],
            maxLength: [50, "Panjang judul maksimal 50 karakter"],
        },
        date: {
            type: Date,
            required: [true, "Tanggal dan waktu harus diisi"],
        },
        about: String,
        tagline: {
            type: String,
            required: [true, "Tagline harus diisi"],
        },
        keypoint: [String],
        venueName: {
            type: String,
            required: [true, "Tempat acara harus diisi"],
        },
        statusEvent: {
            type: String,
            enum: {
                values: ["DRAFT", "PUBLISHED"],
                message:
                    "Status event harus diisi dengan nilai 'DRAFT' atau 'PUBLISHED'",
            },
            default: "Draft",
        },
        tickets: {
            type: [ticketCategorySchema],
            required: true,
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: "Category",
            required: true,
        },
        image: {
            type: mongoose.Types.ObjectId,
            ref: "Image",
            required: true,
        },
        talent: {
            type: mongoose.Types.ObjectId,
            ref: "Talent",
            required: true,
        },
        organizer: {
            type: mongoose.Types.ObjectId,
            ref: "Organizer",
            required: true,
        },
    },
    { timeStamps: true }
);

module.exports = model("Events", eventSchema);
