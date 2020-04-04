var Course = require("../models/course");
var Lecturer = require("../models/lecturer");
var user = require("../models/user");

exports.getCourses = async function() {
  const query = {
    limit: 10,
    order: [["createdAt", "DESC"]]
  };

  try {
    return await Course.findAll(query);
  } catch (e) {
    throw Error("Error while getting Courses");
  }
};

exports.createCourse = async function(entity) {
  try {
    return await Course.create(entity);
  } catch (error) {
    if (error) {
      throw Error("Error when creating course");
    }
  }
};

exports.readCourse = async function(id) {
  try {
    return await Course.findOne({ where: { course_id: id } });
  } catch (e) {
    throw Error("Error fetching course with id: " + id);
  }
};

exports.updateCourse = async function(entity, id) {
  try {
    return await Course.update(entity, {
      where: {
        course_id: id
      }
    });
  } catch (err) {
    if (err) {
      throw Error("Error while updating the course");
    }
  }
};

exports.delete = async function(id) {
  try {
    return await Course.destroy({
      where: {
        course_id: id
      }
    });
  } catch (e) {
    throw Error("Error while deleting course with id:" + id);
  }
};
