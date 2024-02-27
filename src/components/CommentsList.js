import React from "react";
import CommentCard from "./CommentCard";

const CommentsList = ({ comments }) => {
  // REMEBER TO NOT USE INDEX AS KEYS
  return comments.map((comment, index) => (
    <div key={index}>
      <CommentCard data={comment} />
      <div className="pl-5 border-l-2">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
