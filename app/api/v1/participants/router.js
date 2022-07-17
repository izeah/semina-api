const router = require("express").Router();
const {
    signup,
    activeParticipant,
    signin,
    getAllLandingPage,
    getDetailLandingPage,
    getDashboard,
} = require("./controller");
const { participantAuthentication } = require("../../../middlewares");

router.post("/auth/signup", signup);
router.post("/auth/signin", signin);
router.put("/active", activeParticipant);
router.get("/events", getAllLandingPage);
router.get("/events/:id", getDetailLandingPage);
router.get("/orders", participantAuthentication, getDashboard);

module.exports = router;
