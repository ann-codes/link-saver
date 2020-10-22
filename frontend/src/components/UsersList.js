import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import PaperHeading from "./PaperHeading";

import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@material-ui/core";

const UsersList = () => {
  const usersList = useSelector((state) => state.usersList);

  const mapUsers = usersList.map((user) => (
    <TableRow key={user.id}>
      <TableCell>
        <Link to={`/user/${user.id}`}>{user.name}</Link>
      </TableCell>
      <TableCell align="right">{user.blogs.length}</TableCell>
    </TableRow>
  ));

  return (
    <div>
      <PaperHeading heading="User Statistics" />
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <span>Name</span>
                </TableCell>
                <TableCell align="right">
                  <span>Links Submitted</span>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{mapUsers}</TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default UsersList;
