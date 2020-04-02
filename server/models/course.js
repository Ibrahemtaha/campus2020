var Sequelize = require("sequelize");
// importing connection database
var sequelize = require("./db");

sequelize.sync();

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
    },
    lecturer_id: {
      type: Sequelize.INTEGER,
      references: "lecturer", // <<< Note, its table's name, not object name
      referencesKey: "id" // <<< Note, its a column name
    }
  },
  {
    timestamps: true
  }
);

course.belongsTo(lecturer);

module.exports = course;
