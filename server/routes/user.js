var express = require("express");
var router = express.Router();

/* import controller method */
const { create, list, read, update, remove } = require("../controllers/user");

router.post("/user", create);
router.get("/users", list);
router.get("/user/:id", read);
router.put("/user/:id", update);
router.delete("/user/:id", remove);

module.exports = router;
