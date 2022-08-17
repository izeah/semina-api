const UserRefreshToken = require("../../api/v1/userRefreshToken/model");
const User = require("../../api/v1/users/model");
const jwt = require("jsonwebtoken");
const { jwtRefreshSecret } = require("../../config");

const createUserRefreshToken = async (payload) => {
    const result = await UserRefreshToken.create(payload);

    return result;
};

const getUserRefreshToken = async (req) => {
    const { refreshToken } = req.params;
    const result = await UserRefreshToken.findOne({ refreshToken });

    const payload = jwt.verify(result.refreshToken, jwtRefreshSecret, {
        algorithms: "HS512",
    });

    const userCheck = await User.findOne({ email: payload.email });

    const token = userCheck.generateToken();

    return token;
};

module.exports = {
    createUserRefreshToken,
    getUserRefreshToken,
};
