var LoginService = require("../services/login.service");

var sequelize = require("../models/db");
//var User = require("../models/user");
sequelize.sync();

exports.login = async function (req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: "email and password are requeired",
    });
  }
  try {
    var login = await LoginService.createLogin({ email, password });
    return res.status(200).json({
      status: 201,
      data: login,
      message: "SuccessFully login",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
