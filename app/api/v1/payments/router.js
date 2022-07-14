const router = require("express").Router();
const { index, find, create, destroy, update } = require("./controller");

router.post("/payments", create);
router.get("/payments", index);
router.get("/payments/:id", find);
router.put("/payments/:id", update);
router.delete("/payments/:id", destroy);

module.exports = router;
