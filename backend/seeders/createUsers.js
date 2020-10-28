const bcrypt = require("bcrypt");
const User = require("../models/user");
const newUsers = require("./dataUsers")

const createUsers = async () => {
  const passwordHash = await bcrypt.hash("SecurePW", 10);

  newUsers.forEach(async (user) => {
    const newUser = new User({
      name: user.name,
      username: user.username,
      passwordHash: passwordHash,
    });

    try {
      await newUser.save();
    } catch (e) {
      console.error("ERROR:", e);
    }
  });
};

module.exports = createUsers;
