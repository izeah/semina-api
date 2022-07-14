const router = require("express").Router();
const { create } = require("./controller");
const upload = require("../../../middleware/multer");

router.post("/images", upload.single("avatar"), create);

module.exports = router;
