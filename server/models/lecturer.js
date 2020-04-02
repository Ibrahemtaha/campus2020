var Sequelize = require("sequelize");
// importing connection database
var sequelize = require("./db");
//var user = require("./user");

sequelize.sync();

var lecturer = sequelize.define(
  "lecturer",
  {
    lecturer_id: {
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
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      isEmail: true,
      unique: true
      // validate: {
      //   isEmail: {
      //     msg: "Must be a valid email address"
      //   }
      // }
    },
    phone: {
      //type: Sequelize.ARRAY(Sequelize.STRING),
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [9, 10],
        not: ["[a-z]", "i"]
      }
    }
    // user_id: {
    //   type: Sequelize.INTEGER,
    //   references: "user", // <<< Note, its table's name, not object name
    //   referencesKey: "id" // <<< Note, its a column name
    // }
  },
  {
    timestamps: true
  }
);

//lecturer.hasMany(user);

module.exports = lecturer;
