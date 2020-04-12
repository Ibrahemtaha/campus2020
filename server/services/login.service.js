var Login = require("../models/user");
const bcrypt = require("bcryptjs");

exports.createLogin = async function (entity) {
  const { email, password } = entity; // is that needed, Mash?
  const user = await Login.findOne({ where: { email: email } });
  if (user) {
    //throw Error("Email Already Exist");
  }

  try {
    // const hash = bcrypt.hashSync(password, 10);
    // console.log(hash);
    // await User.create({ ...entity, password: hash });
  } catch (error) {
    // if (error) {
    //   console.log(error);
    //   throw Error("Error when creating user");
    // }
  }
};
