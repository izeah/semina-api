const nodemailer = require("nodemailer");
const { smtpUsername, smtpSender, smtpPassword } = require("../../config");
const Mustache = require("mustache");
const fs = require("fs");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: smtpUsername,
        pass: smtpPassword,
    },
});

const otpMail = async (email, data) => {
    try {
        let template = fs.readFileSync("app/views/email/otp.html", "utf8");

        let message = {
            from: smtpSender,
            to: email,
            subject: "Otp for registration",
            html: Mustache.render(template, data),
        };

        return await transporter.sendMail(message);
    } catch (ex) {
        console.log(ex);
    }
};

module.exports = { otpMail };
