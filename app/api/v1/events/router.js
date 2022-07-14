const router = require("express").Router();
const { authentication, authorization } = require("../../../middleware");
const {
    index,
    find,
    create,
    destroy,
    update,
    updateStatus,
} = require("./controller");

router.post("/events", authentication, authorization("ORGANIZER"), create);
router.get("/events", authentication, authorization("ORGANIZER"), index);
router.get("/events/:id", authentication, authorization("ORGANIZER"), find);
router.put("/events/:id", authentication, authorization("ORGANIZER"), update);
router.put(
    "/events/:id/status",
    authentication,
    authorization("ORGANIZER"),
    updateStatus
);
router.delete(
    "/events/:id",
    authentication,
    authorization("ORGANIZER"),
    destroy
);

module.exports = router;
