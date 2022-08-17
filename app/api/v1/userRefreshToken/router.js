const { index } = require("./controller");

const router = require("express").Router();

router.get("/refresh-token/:refreshToken", index);

module.exports = router;
