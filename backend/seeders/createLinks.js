const Blog = require("../models/blog");
const User = require("../models/user");
const dataComments = require("./dataComments");
const dataLinks = require("./dataLinks");
// const users = require("./dataUsers");

const randomToMax = (max) => Math.ceil(Math.random() * max);
const maxLinks = 4; // range is 1 to n
const maxComments = 6; // range is 0 to n-1

const createLinks = async () => {
  // console.log("[ Deleting links ]");
  // await Blog.deleteMany({}); // seeding fails at delete for npm run seed
  console.log("[ Creating links ]");

  const comments = Object.assign(dataComments);
  const links = Object.assign(dataLinks);

  const allUsers = await User.find({});
  console.log("ALL ====================================", allUsers);

  allUsers.forEach(async (user) => {
    const commentsAllowed = randomToMax(maxComments);
    const linksAllowed = randomToMax(maxLinks);

    for (let i = linksAllowed; i > 0; i--) {
      const linkIndex = Math.ceil(Math.random() * links.length);
      const randomLink = links.splice(linkIndex, 1);

      console.log(
        "--------------------- new ---------------------",
        "\nADDING LINK ==>",
        randomLink[0].url,
        "\nLINK INDEX ==>",
        linkIndex
      ); ///////////////////////////////////////////////

      const linkObj = {};
      let newComments = [];

      if (randomLink[0].url !== undefined) {
        // checks for undefined before attempting to create record to add

        for (let i = commentsAllowed; i > 1; i--) {
          // make greater than 1 for chance of zero comments
          const commentsIndex = Math.ceil(Math.random() * comments.length);
          newComments = newComments.concat(comments.splice(commentsIndex, 1));
        }

        try {
          linkObj.title = randomLink[0].title;
          linkObj.author = user.name;
          linkObj.url = randomLink[0].url;
          linkObj.likes = randomToMax(20);
          linkObj.comments = newComments;
        } catch (e) {
          console.log("ERROR ====>", e);
        }

        console.log(
          "REMAINING LINKS ==>",
          links.length,
          "\nOBJ CHECK ==>",
          linkObj._id
        ); ///////////////////////////////////////////////

        try {
          linkObj.user = user._id;
          const linkToSave = new Blog(linkObj);
          const savedLink = await linkToSave.save();
          user.blogs = await user.blogs.concat(savedLink._id);
          await user.save();

          // console.log("POST SUCCESS CHECK ==>", linkObj._id); //////////
        } catch (e) {
          console.log("ERROR :>> ", e);
        }
      }
    }
  });

  console.log("[ All links created ]");
};

module.exports = createLinks;
