var CourseService = require("../services/course.service");

const controllers = {};

var sequelize = require("../models/db");
var Course = require("../models/course");

sequelize.sync();

exports.create = async function(req, res) {
  const { name, hours } = req.body;
  if (!name || !hours) {
    return res.status(400).json({
      error: "title and user and content is requred"
    });
  }
  try {
    var course = await CourseService.createCourse({ name, hours });
    return res.status(200).json({
      status: 201,
      data: course,
      message: "SuccessFully post created"
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.list = async function(req, res, next) {
  // 201 -- when new object created
  // 404 --- not found
  // 200 --- it's ok
  // 404 -- something bad hapened
  // 500 -- some exceptions happens
  try {
    const courses = await CourseService.getCourses();
    return res.status(200).json({
      status: 200,
      data: courses,
      message: "SuccessFully course Retrived"
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.read = async function(req, res, next) {
  const { id } = req.params;
  try {
    const course = await CourseService.readCourse(id);
    return res.status(200).json({
      status: 200,
      data: course,
      message: "Successfully retrieved singe course"
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.update = async function(req, res, next) {
  const { id } = req.params;
  const { title, user } = req.body;
  console.log(title, user);
  try {
    const result = await CourseService.updateCourse({ title, user }, id);
    return res.status(200).json({
      status: 200,
      data: result,
      message: `Successfully updated with id ${id}`
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.remove = async function(req, res, next) {
  const { id } = req.params;
  try {
    const course = await CourseService.delete(id);
    return res.status(200).json({
      status: 200,
      data: course,
      message: `Successfully deleted with id ${id}`
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
