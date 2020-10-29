const Blog = require("../models/blog");
const User = require("../models/user");
const createUsers = require("./createUsers");
const createLinks = require("./createLinks");

const masterSeeder = async () => {
  console.log("[ Running seeder ]");

  try {
    await createUsers();
  } catch (e) {
    console.log("ERROR CREATING USERS ==>", e);
  }

  try {
    await createLinks();
  } catch (e) {
    console.log("ERROR CREATING LINKS ==>", e);
  }

  console.log("[ Seeding done ]");
};

masterSeeder();

module.exports = masterSeeder;
