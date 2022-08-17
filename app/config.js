const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    urlDb: process.env.URL_MONGODB,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpirationTime: process.env.JWT_EXPIRATION_TIME,
    jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
    jwtRefreshExpirationTime: process.env.JWT_REFRESH_EXPIRATION_TIME,
    smtpUsername: process.env.SMTP_USERNAME,
    smtpPassword: process.env.SMTP_PASSWORD,
    smtpSender: process.env.SMTP_SENDER,
};
