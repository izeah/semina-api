const router = require("express").Router();
const { index, find, create, destroy, update } = require("./controller");

router.post("/talents", create);
router.get("/talents", index);
router.get("/talents/:id", find);
router.put("/talents/:id", update);
router.delete("/talents/:id", destroy);

module.exports = router;
