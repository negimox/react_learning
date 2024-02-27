import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="grid grid-flow-row my-4 px-2">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
