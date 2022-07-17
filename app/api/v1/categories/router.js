const router = require("express").Router();
const { index, find, create, destroy, update } = require("./controller");
const { authentication, authorization } = require("../../../middlewares");

router.post("/categories", authentication, authorization("ORGANIZER"), create);
router.get("/categories", authentication, authorization("ORGANIZER"), index);
router.get("/categories/:id", authentication, authorization("ORGANIZER"), find);
router.put(
    "/categories/:id",
    authentication,
    authorization("ORGANIZER"),
    update
);
router.delete(
    "/categories/:id",
    authentication,
    authorization("ORGANIZER"),
    destroy
);

module.exports = router;
