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
      type: Sequelize.ENUM,
      values: ["admin", "teacher", "student"]
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
        //   isEmail: {
        //     msg: "Must be a valid email address"
        //   }
      }
    },
    phone: {
      //type: Sequelize.ARRAY(Sequelize.STRING),
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [9, 10],
        not: ["[a-z]", "i"]
      }
    },
    password: {
      type: Sequelize.STRING,
      validate: {
        len: [5, 50]
      }
    }
  },
  {
    timestamps: true
  }
);

module.exports = user;
