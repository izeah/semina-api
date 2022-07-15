const router = require("express").Router();
const { authentication, authorization } = require("../../../middleware");
const { index, find, create, destroy, update } = require("./controller");

router.post("/talents", authentication, authorization("ORGANIZER"), create);
router.get("/talents", authentication, authorization("ORGANIZER"), index);
router.get("/talents/:id", authentication, authorization("ORGANIZER"), find);
router.put("/talents/:id", authentication, authorization("ORGANIZER"), update);
router.delete(
    "/talents/:id",
    authentication,
    authorization("ORGANIZER"),
    destroy
);

module.exports = router;
