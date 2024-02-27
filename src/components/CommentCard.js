import React from "react";
import { ICO_USER } from "../utils/constant";

const CommentCard = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="text-white mt-4 flex flex-wrap bg-neutral-800 p-2 rounded-lg">
      <ICO_USER />
      <div className="pl-2 bg-transparent">
        <p className="font-bold bg-transparent">{name}</p>
        <p className="bg-transparent">{text}</p>
      </div>
    </div>
  );
};

export default CommentCard;
