var LoginService = require("../services/login.service");
var sequelize = require("../models/db");
//var User = require("../models/user");
sequelize.sync();

exports.login = async function (req, res) {
  try {
    var token = await LoginService.generateToken(req.user);
    return res.status(200).json({
      status: 201,
      token: token,
      message: "SuccessFully login",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
