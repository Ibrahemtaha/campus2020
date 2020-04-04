var Sequelize = require("sequelize");
// importing connection database
var sequelize = require("./db");

sequelize.sync();

var speciality = sequelize.define(
  "speciality",
  {
    speciality_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    speciality_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [0, 50]
      }
    }
  },
  {
    timestamps: true
  }
);

module.exports = speciality;
