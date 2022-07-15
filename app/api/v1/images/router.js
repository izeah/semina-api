const router = require("express").Router();
const { create } = require("./controller");
const upload = require("../../../middleware/multer");
const { authentication, authorization } = require("../../../middleware");

router.post(
    "/images",
    authentication,
    authorization("ORGANIZER"),
    upload.single("avatar"),
    create
);

module.exports = router;
