const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let organizerSchema = Schema(
    {
        organizer: {
            type: String,
            required: [true, "Penyelenggara harus diisi"],
            minlength: [3, "Panjang nama penyelenggara minimal 3 karakter"],
            maxLength: [20, "Panjang nama penyelenggara maksimal 20 karakter"],
        },
    },
    { timestamps: true }
);

module.exports = model("Organizer", organizerSchema);
