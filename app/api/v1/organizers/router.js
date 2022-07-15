const router = require("express").Router();
const {
    createCMSOrganizer,
    createCMSUser,
    getAllCMSUsers,
} = require("./controller");
const { authentication, authorization } = require("../../../middleware");

router.post(
    "/organizers",
    authentication,
    authorization("OWNER"),
    createCMSOrganizer
);
router.post(
    "/users",
    authentication,
    authorization("ORGANIZER"),
    createCMSUser
);
router.get("/users", authentication, authorization("OWNER"), getAllCMSUsers);

module.exports = router;
