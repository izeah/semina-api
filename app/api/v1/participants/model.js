const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

let participantSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "Nama depan harus diisi"],
            minlength: 3,
            maxlength: 50,
        },
        lastName: {
            type: String,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: [true, "Email harus diisi"],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please fill a valid email address",
            ],
        },
        password: {
            type: String,
            required: [true, "Password harus diisi"],
            minLength: [6, "Password minimal 6 karakter"],
        },
        role: {
            type: String,
            default: "-",
        },
        status: {
            type: String,
            enum: ["aktif", "nonaktif"],
            default: "nonaktif",
        },
        otp: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

participantSchema.pre("save", async function (next) {
    const User = this;
    if (User.isModified("password")) {
        User.password = await bcrypt.hash(User.password, 12);
    }
    next();
});

participantSchema.methods.comparePassword = async function (password) {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
};

participantSchema.methods.generateToken = function () {
    const token = jwt.sign(
        {
            lastName: this._doc.lastName,
            id: this._doc._id,
            firstName: this._doc.firstName,
            email: this._doc.email,
        },
        jwtSecret,
        {
            algorithm: "HS512",
            header: { typ: "JWT", alg: "HS512" },
            expiresIn: jwtExpirationTime,
        }
    );

    return token;
};

module.exports = mongoose.model("Participant", participantSchema);
