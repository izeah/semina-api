const Users = require("../../api/v1/users/model");
const {
    Unauthenticated,
    NotFoundError,
    BadRequestError,
} = require("../../errors");

const signin = async (req) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new BadRequestError("Please provide email and password");
    }

    let result = await Users.findOne({ email });

    if (!result) throw new NotFoundError("User tidak terdaftar");

    if (!result.comparePassword(password)) {
        throw new Unauthenticated("Password salah");
    }

    // generate JWT Token
    const token = result.generateToken();

    // convert user model schema to JSON Object
    result = result.toObject();

    // delete password on response
    delete result.password;
    delete result.__v;
    result.token = token;

    return result;
};

module.exports = {
    signin,
};
