const router = require("express").Router();
const { create } = require("./controller");
const upload = require("../../../middlewares/multer");
const { authentication, authorization } = require("../../../middlewares");

router.post(
    "/images",
    authentication,
    authorization("ORGANIZER"),
    upload.single("avatar"),
    create
);

module.exports = router;
