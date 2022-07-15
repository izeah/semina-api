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

router.post(
    "/events",
    authentication,
    authorization("ORGANIZER", "ADMIN"),
    create
);
router.get(
    "/events",
    authentication,
    authorization("ORGANIZER", "ADMIN"),
    index
);
router.get(
    "/events/:id",
    authentication,
    authorization("ORGANIZER", "ADMIN"),
    find
);
router.put(
    "/events/:id",
    authentication,
    authorization("ORGANIZER", "ADMIN"),
    update
);
router.put(
    "/events/:id/status",
    authentication,
    authorization("ORGANIZER", "ADMIN"),
    updateStatus
);
router.delete(
    "/events/:id",
    authentication,
    authorization("ORGANIZER", "ADMIN"),
    destroy
);

module.exports = router;
