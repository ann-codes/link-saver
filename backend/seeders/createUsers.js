const bcrypt = require("bcrypt");
const User = require("../models/user");
const newUsers = require("./dataUsers");

const createUsers = async () => {
  // console.log("[ Deleting users ]");
  // await User.deleteMany({}); // seeding fails at delete for npm run seed
  console.log("[ Creating users ]");

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

  console.log("[ All users created ]");
};

module.exports = createUsers;
