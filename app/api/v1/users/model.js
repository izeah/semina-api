const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpirationTime } = require("../../../config");

let userSchema = Schema(
    {
        name: {
            type: String,
            required: [true, "Nama harus diisi"],
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
            enum: {
                values: ["ADMIN", "ORGANIZER", "OWNER"],
                message:
                    "Role user harus diisi dengan nilai 'ADMIN', 'ORGANIZER', atau 'OWNER'",
            },
            default: "ADMIN",
        },
        organizer: {
            type: mongoose.Types.ObjectId,
            ref: "Organizer",
            required: true,
        },
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    const User = this;
    if (User.isModified("password")) {
        User.password = await bcrypt.hash(User.password, 12);
    }

    next();
});

userSchema.methods.comparePassword = async function (password) {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
};

userSchema.methods.generateToken = function () {
    const token = jwt.sign(
        {
            id: this._doc._id,
            name: this._doc.name,
            email: this._doc.email,
            role: this._doc.role,
            organizer: this._doc.organizer,
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

module.exports = model("User", userSchema);
