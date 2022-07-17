const router = require("express").Router();
const { index } = require("./controller");
const { authentication, authorization } = require("../../../middlewares/auth");

router.get(
    "/orders",
    authentication,
    authorization("ORGANIZER", "ADMIN", "OWNER"),
    index
);

module.exports = router;
