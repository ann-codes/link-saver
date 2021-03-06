import React from "react";
import Blog from "./Blog";
import { useSelector } from "react-redux";
import Togglable from "./Togglable";
import BlogForm from "./BlogForm";
import PaperHeading from "./PaperHeading";

import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  makeStyles,
  TableRow,
  TableCell,
} from "@material-ui/core";

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs);
  const user = useSelector((state) => state.user);

  const blogsList = blogs ? (
    blogs
      .sort((a, b) => b.likes - a.likes)
      .map((blog) => <Blog key={blog.id} blog={blog} user={user} />)
  ) : (
    <TableRow>
      <TableCell>loading...</TableCell>
    </TableRow>
  );

  const useStyles = makeStyles({
    table: {
      width: "full",
    },
  });

  const classes = useStyles();

  return (
    <>
      <PaperHeading heading="Links Saved" />

      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableBody>
            {blogsList.length > 0 ? (
              blogsList
            ) : (
              <TableRow>
                <TableCell>
                  <span>No Links Found</span>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <hr />
      <Togglable LabelOff="Cancel Add" LabelOn="Add New Link">
        <BlogForm user={user} />
      </Togglable>
    </>
  );
};

export default BlogList;
