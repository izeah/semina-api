const Users = require("../../api/v1/users/model");
const Organizers = require("../../api/v1/organizers/model");
const { BadRequestError } = require("../../errors");

const createOrganizers = async (req) => {
    const { organizer, role, email, password, confirmPassword, name } =
        req.body;
    if (password !== confirmPassword) {
        throw new BadRequestError("Password dan confirmPassword tidak cocok");
    }

    const result = await Organizers.create({ organizer });

    const users = await Users.create({
        email,
        name,
        password,
        role,
        organizer: result._id,
    });

    delete users._doc.password;

    return users;
};

const createUsers = async (req, res) => {
    const { name, password, role, confirmPassword, email } = req.body;

    if (password !== confirmPassword) {
        throw new BadRequestError("Password dan confirmPassword tidak cocok");
    }

    const result = await Users.create({
        name,
        email,
        organizer: req.user.organizer,
        password,
        role,
    });

    delete result._doc.password;

    return result;
};

module.exports = {
    createOrganizers,
    createUsers,
};
