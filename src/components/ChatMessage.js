import React from "react";
import { ICO_USER } from "../utils/constant";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="bg-transparent py-2 flex flex-wrap flex-row items-center w-full">
      <ICO_USER />
      <p className="bg-transparent font-bold px-2">{name}</p>
      <p
        style={{ wordWrap: "break-word" }}
        className="w-full bg-transparent md:-mt-1 pl-0 md:pl-10"
      >
        {message}
      </p>
    </div>
  );
};

export default ChatMessage
