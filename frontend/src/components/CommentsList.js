import React from "react";
import { Paper } from "@material-ui/core";
import PaperHeading from "./PaperHeading";

const CommentsList = ({ commentsList }) => {
  const mappedComments =
    commentsList.length > 0 ? (
      commentsList.map((c, i) => <li key={`${i}-comment`}>{c}</li>)
    ) : (
      <li>No comments found. Add your comment below.</li>
    );

  return (
    <div>
      <PaperHeading heading="Comments" />
      <Paper>
        <div className="paper-pad">
          <ul>{mappedComments}</ul>
        </div>
      </Paper>
    </div>
  );
};

export default CommentsList;
