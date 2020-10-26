const bcrypt = require("bcrypt");
const User = require("../models/user");

const createUsers = async () => {
  //   await User.deleteMany({});

  const newUsers = [
    { name: "Zeus SassyCat", username: "CoolCat" },
    { name: "Ann Nguyen", username: "AnnCodes" },
    { name: "Adam Dude", username: "AdamGuy" },
    { name: "Finn T. Oddler", username: "SuperTot" },
    { name: "Watt B. Aby", username: "LilBabe" },
  ];

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
