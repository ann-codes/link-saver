import React from "react";
import { Paper } from "@material-ui/core";

const PaperHeading = ({ heading }) => {
  return (
    <Paper className="paper-heading">
      <h2>{heading}</h2>
    </Paper>
  );
};

export default PaperHeading;
