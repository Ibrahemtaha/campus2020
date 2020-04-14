const express = require("express");
const router = express.Router();
const passport = require("passport");
const passportSignIn = passport.authenticate("local", { session: false });
const { validateBody, schemas } = require("../helpers/routeHelpers");
const { login } = require("../controllers/login");

/* import controller method */

router
  .route("/login")
  .post(validateBody(schemas.authSchema), passportSignIn, login);

module.exports = router;
