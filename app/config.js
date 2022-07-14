const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    urlDb: process.env.URL_MONGODB,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpirationTime: "72h", // 3 days
    jwtRefreshExpirationTime: "168h", // 7 days (1 week)
};
