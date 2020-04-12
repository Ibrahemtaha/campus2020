var express = require("express");
var router = express.Router();

/* import controller method */
const { login } = require("../controllers/login");

router.post("/login", login);

module.exports = router;
