import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video text-white pt-[17%] px-24 absolute bg-black/15 bg-gradient-to-t from-black via-black via-15%">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className="hover:bg-opacity-80 font-bold rounded-md bg-white text-black px-10 py-3.5 text-2xl">
          ▶︎ Play
        </button>
        <button className="bg-opacity-70 hover:bg-opacity-45 font-bold rounded-md mx-6 bg-gray-400 text-white px-10 py-3.5 text-2xl">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
