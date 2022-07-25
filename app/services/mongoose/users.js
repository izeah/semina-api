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

const createUsers = async (req) => {
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

const getAllUsers = async (req) => {
    const result = await Users.find()
        .populate({
            path: "organizer",
            select: "_id organizer",
        })
        .select("_id name email role organizer");

    return result;
};

module.exports = {
    createOrganizers,
    createUsers,
    getAllUsers,
};
