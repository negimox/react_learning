import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //   console.log("API poll");
      //   FOR LIVE DATA WE WILL NEED TO USE FETCH AND JUST DISPATCH THAT DATA.
      dispatch(
        addChatMessage({
          name: generateRandomName(),
          message: generateRandomText(Math.floor(Math.random() * 20) + 5),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="text-white ml-6 pt-4 px-3 bg-neutral-700 rounded-lg w-[44%] h-96">
      <div className="bg-transparent">
        <h1 className="font-bold bg-transparent border-b-2 border-neutral-500 pb-1">
          LiveChat
        </h1>
      </div>
      <div className="overflow-y-scroll  flex flex-col-reverse h-[75%] bg-transparent">
        {chatMessage.map((data) => (
          <ChatMessage name={data.name} message={data.message} />
        ))}
      </div>
      <form
        className="bg-transparent items-center flex flex-row border-t-2 border-neutral-500 mt-2 p-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (message === "") return;
          dispatch(
            addChatMessage({
              name: "Negimox",
              message: message,
            })
          );
          setMessage("");
        }}
      >
        <input
          className="bg-transparent border-b-2 border-neutral-400 focus:border-white outline-none"
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
        />
        <button className="bg-neutral-600 rounded-lg py-1 px-3 ml-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
