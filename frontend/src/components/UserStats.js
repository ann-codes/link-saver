import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { findOneUserById } from "../reducers/findUserReducer";

import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
} from "@material-ui/core";
import PaperHeading from "./PaperHeading";

const UserStats = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.oneUser);
  const id = useParams().id;

  useEffect(() => {
    dispatch(findOneUserById(id));
  }, [dispatch, id]);

  if (!user) {
    return <PaperHeading heading="Searching for user..." />;
  } else if (!user.blogs) {
    return <PaperHeading heading="Searching for user..." />;
  }

  const mappedBlogs =
    user.blogs.length > 0 ? (
      user.blogs.map((b) => (
        <TableRow key={b.id}>
          <TableCell>
            <Link to={`/blog/${b.id}`}>{b.title}</Link>
          </TableCell>
        </TableRow>
      ))
    ) : (
      <TableRow hover={true}>
        <TableCell>
          <span>{user.name} has not submitted any blog links.</span>
        </TableCell>
      </TableRow>
    );

  return (
    <>
      <PaperHeading heading={`${user.name}'s Saved Links`} />
      <TableContainer component={Paper}>
        <Table>
          <TableBody>{mappedBlogs}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserStats;
