var Sequelize = require("sequelize");
// importing connection database
var sequelize = require("./db");
var lecturer = require("./lecturer");

//sequelize.sync();

var course = sequelize.define(
  "course",
  {
    course_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [0, 50]
      }
    },
    hours: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    file: {
      type: Sequelize.BLOB("long"),
      allowNull: true
    }
    // lecturer_id: {
    //   type: Sequelize.INTEGER,
    //   references: "lecturer", // <<< Note, its table's name, not object name
    //   referencesKey: "id" // <<< Note, its a column name
    // }
  },
  {
    timestamps: true
  }
);

course.hasMany(lecturer, { foreignKey: "lecturer_id" }); /// metda data==>
lecturer.belongsTo(course, { foreignKey: { name: "course_id" } });
//course.belongsTo(lecturer, { foreignKey: { name: "lecturer_id" } });
//lecturer.belongsTo(course);

module.exports = course;

//https://sequelize.org/master/manual/assocs.html
