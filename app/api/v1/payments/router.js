const router = require("express").Router();
const { authentication, authorization } = require("../../../middlewares");
const { index, find, create, destroy, update } = require("./controller");

router.post("/payments", authentication, authorization("ORGANIZER"), create);
router.get("/payments", authentication, authorization("ORGANIZER"), index);
router.get("/payments/:id", authentication, authorization("ORGANIZER"), find);
router.put("/payments/:id", authentication, authorization("ORGANIZER"), update);
router.delete(
    "/payments/:id",
    authentication,
    authorization("ORGANIZER"),
    destroy
);

module.exports = router;
