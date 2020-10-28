const Blog = require("../models/blog");
const User = require("../models/user");
const dataComments = require("./dataComments");
const dataLinks = require("./dataLinks");
const users = require("./dataUsers");

const randomToMax = (max) => Math.ceil(Math.random() * max);
const maxLinks = 2; // range is 1 to n
const maxComments = 6; // range is 0 to n-1

const createLinks = async () => {
  const comments = Object.assign(dataComments);
  const links = Object.assign(dataLinks);

  users.forEach(async (user) => {
    const commentsAllowed = randomToMax(maxComments);
    const linksAllowed = randomToMax(maxLinks);

    const allUsers = await User.find({});
    console.log("ALL ====================================", allUsers);

    // // get account info for ID ==== do I need this?
    // const foundUser = await User.findOne({ username: user.username });
    // console.log("found user ===>", foundUser.name, foundUser.id); ///

    ///================ start here

    // make test blog add to existing for structure
    // then loop through all users to add links

    // create the comments, mutate comments obj to have unique

    // create the link object, mutate links to make sure you have unique

    // this goes inside the create links loop
    let newComments = [];
    // make greater than 1 for chance of zero comments
    for (let i = commentsAllowed; i > 1; i--) {
      const commentIndex = Math.ceil(Math.random() * comments.length);
      newComments = newComments.concat(comments.splice(commentIndex, 1));
    }
    console.log("new comments", newComments); /////
    console.log(comments.length);
  });

  console.log("ALL USERS", users);
};

module.exports = createLinks;
