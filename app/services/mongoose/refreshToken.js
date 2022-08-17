const UserRefreshToken = require("../../api/v1/userRefreshToken/model");
const User = require("../../api/v1/users/model");
const jwt = require("jsonwebtoken");
const { jwtRefreshSecret } = require("../../config");
const { Unauthenticated } = require("../../errors");

const createUserRefreshToken = async (payload) => {
    const result = await UserRefreshToken.create(payload);

    return result;
};

const getUserRefreshToken = async (req) => {
    const { refreshToken } = req.params;
    const result = await UserRefreshToken.findOne({ refreshToken });

    let payload;
    jwt.verify(
        result.refreshToken,
        jwtRefreshSecret,
        {
            algorithms: "HS512",
        },
        (err, decoded) => {
            if (err)
                throw new Unauthenticated(
                    err.message ||
                        "Unauthorized, please login with a valid credential"
                );

            payload = decoded;
        }
    );

    const userCheck = await User.findOne({ email: payload.email });

    const token = userCheck.generateToken();

    return token;
};

module.exports = {
    createUserRefreshToken,
    getUserRefreshToken,
};
