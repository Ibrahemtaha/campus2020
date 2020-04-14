const Login = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { JWT_SECRET } = require("../config");

exports.generateToken = async function (user) {
  const { user_id, phone, email, role, first_name, last_name } = user;
  return jwt.sign(
    {
      user_id,
      phone,
      email,
      role,
      firstName: first_name,
      lastName: last_name,
    },
    JWT_SECRET,
    { expiresIn: "60m" }
  );
};
