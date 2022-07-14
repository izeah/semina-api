const router = require("express").Router();
const { createCMSOrganizer, createCMSUser } = require("./controller");
const { authentication } = require("../../../middleware");

router.post("/organizers", createCMSOrganizer);
router.post("/users", authentication, createCMSUser);

module.exports = router;
