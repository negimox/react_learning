import React from "react";
import {
  ICO_LEFT_ARROW,
  ICO_RIGHT_ARROW,
  SCROLL_INCREMENT_AMOUNT,
} from "./constants";

const Arrow = ({ type, index }) => {
  const isRight = type === "r";
  const cssPos = isRight
    ? " -right-3 bg-gradient-to-l "
    : " -left-3 bg-gradient-to-r ";

  const handleArrowClick = () => {
    const tabsList = document.querySelector("." + "list-" + index);
    isRight
      ? (tabsList.scrollLeft += SCROLL_INCREMENT_AMOUNT)
      : (tabsList.scrollLeft -= SCROLL_INCREMENT_AMOUNT);
  };

  return (
    <div
      className={
        "flex justify-center absolute" +
        cssPos +
        "h-[100%] top-0 from-black via-black via-15%"
      }
    >
      <div
        className="hover:bg-gray-400/45 hover:cursor-pointer rounded-full p-3 m-auto"
        onClick={handleArrowClick}
      >
        {isRight ? <ICO_RIGHT_ARROW /> : <ICO_LEFT_ARROW />}
      </div>
    </div>
  );
};

export default Arrow;
