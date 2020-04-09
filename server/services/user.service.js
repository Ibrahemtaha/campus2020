var User = require("../models/user");
const bcrypt = require("bcryptjs");

//List all users
exports.getUsers = async function () {
  const query = {
    limit: 10,
    order: [["createdAt", "DESC"]],
  };

  try {
    return await User.findAll(query);
  } catch (e) {
    throw Error("Error while getting Users");
  }
};

exports.createUser = async function (entity) {
  const { email, password } = entity;
  const user = await User.findOne({ where: { email: email } });
  if (user) {
    throw Error("Email Already Exist");
  }

  try {
    const hash = bcrypt.hashSync(password, 10);
    console.log(hash);
    await User.create({ ...entity, password: hash });
    //
  } catch (error) {
    if (error) {
      console.log(error);
      throw Error("Error when creating user");
    }
  }
};

// exports.createUser = async function (entity) {
//   try {
//     return await User.create(entity);
//   } catch (error) {
//     if (error) {
//       throw Error("Error when creating user");
//     }
//   }
// };

exports.readUser = async function (id) {
  try {
    return await User.findOne({ where: { user_id: id } });
  } catch (e) {
    throw Error("Error fetching user with id: " + id);
  }
};

exports.updateUser = async function (entity, id) {
  try {
    return await User.update(entity, {
      where: {
        user_id: id,
      },
    });
  } catch (err) {
    if (err) {
      throw Error("Error while updating the user");
    }
  }
};

exports.delete = async function (id) {
  try {
    return await User.destroy({
      where: {
        user_id: id,
      },
    });
  } catch (e) {
    throw Error("Error while deleting user with id:" + id);
  }
};
