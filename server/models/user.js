var Sequelize = require("sequelize");
// importing connection database
var sequelize = require("./db");

sequelize.sync();

var user = sequelize.define(
  "user",
  {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [0, 50]
      }
    },
    role: {
      type: Sequelize.STRING
    },
    hash: {
      type: Sequelize.STRING
    },
    salt: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: true
  }
);

module.exports = user;
