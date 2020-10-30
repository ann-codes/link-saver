// const mongoose = require("mongoose");
const Blog = require("../models/blog");
const User = require("../models/user");
const createUsers = require("./createUsers");
const createLinks = require("./createLinks");

const masterSeeder = async () => {
  console.log("[ Running seeder ]");

  try {
    console.log("[ Deleting users ]");
    // await User.deleteMany({}); /// fails here, when running npm run seed, why?
    // delete only seems to work in app.js file
    await createUsers();
  } catch (e) {
    console.log("ERROR CREATING USERS ==>", e);
  }

  try {
    console.log("[ Deleting links ]");
    await Blog.deleteMany({}); // seeding fails at delete for npm run seed
    await createLinks();
  } catch (e) {
    console.log("ERROR CREATING LINKS ==>", e);
  }

  console.log("[ Seeding done ]");
};

masterSeeder();

module.exports = masterSeeder;
