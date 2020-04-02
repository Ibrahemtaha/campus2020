const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("campus2020", "root", "password", {
  host: "localhost",
  dialect: "mysql"
});

//Check connectionnnnnn
sequelize

  .authenticate()
  .then(() => {
    console.log(" connection has been esblished successfuly to campuss2020");
  })
  .catch(err => {
    console.log(" unable to connect");
  });

module.exports = sequelize;
