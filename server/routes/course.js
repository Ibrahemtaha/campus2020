var express = require("express");
var router = express.Router();

/* import controller method */
const { create, list, read, update, remove } = require("../controllers/course");

router.post("/course", create);
router.get("/courses", list);
router.get("/course/:id", read);
router.put("/course/:id", update);
router.delete("/course/:id", remove);

module.exports = router;
