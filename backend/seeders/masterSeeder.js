const createUsers = require("./createUsers");

const masterSeeder = async () => {
  await createUsers();
};

masterSeeder();

module.exports = masterSeeder;
