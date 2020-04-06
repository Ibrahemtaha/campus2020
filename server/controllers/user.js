var UserService = require("../services/user.service");

const controllers = {};

var sequelize = require("../models/db");
//var User = require("../models/user");

sequelize.sync();

exports.create = async function (req, res) {
  const { first_name, last_name, role, email, phone, password } = req.body;

  if (!first_name || !last_name || !role || !email || !phone || !password) {
    return res.status(400).json({
      error: "all fields are reqiured",
    });
  }
  try {
    var user = await UserService.createUser({
      first_name,
      last_name,
      role,
      email,
      phone,
      password,
    });
    return res.status(200).json({
      status: 201,
      data: user,
      message: "SuccessFully user created",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.list = async function (req, res, next) {
  // 201 -- when new object created
  // 404 --- not found
  // 200 --- it's ok
  // 404 -- something bad hapened
  // 500 -- some exceptions happens
  try {
    const users = await UserService.getUsers();
    return res.status(200).json({
      status: 200,
      data: users,
      message: "SuccessFully course Retrived",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.read = async function (req, res, next) {
  const { id } = req.params;
  try {
    const user = await UserService.readUser(id);
    return res.status(200).json({
      status: 200,
      data: user,
      message: "Successfully retrieved singe course",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.update = async function (req, res, next) {
  const { id } = req.params;
  const { first_name, last_name, role, email, phone, password } = req.body;
  //console.log(first_name, last_name, role, email, phone, password);
  try {
    const result = await UserService.updateUser(
      { first_name, last_name, role, email, phone, password },
      id
    );
    return res.status(200).json({
      status: 200,
      data: result,
      message: `Successfully updated with id ${id}`,
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.remove = async function (req, res, next) {
  const { id } = req.params;
  try {
    const user = await UserService.delete(id);
    return res.status(200).json({
      status: 200,
      data: user,
      message: `Successfully deleted with id ${id}`,
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
