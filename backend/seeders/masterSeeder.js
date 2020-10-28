const Blog = require("../models/blog");
const User = require("../models/user");
const createUsers = require("./createUsers");
const createLinks = require("./createLinks");

const masterSeeder = async () => {
  // await User.deleteMany({});
  // await createUsers();
  // await Blog.deleteMany({});
  await createLinks();
};

masterSeeder();

module.exports = masterSeeder;
