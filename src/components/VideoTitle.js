import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video text-white pt-[27%] md:pt-[17%] px-7 md:px-24 absolute bg-black/15 bg-gradient-to-t from-black via-black via-15%">
      <h1 className="font-bold text-4xl md:text-6xl">{title}</h1>
      <p className="py-6 text-sm hidden md:inline-block md:text-lg md:w-1/3 text-neutral-300">
        {overview}
      </p>
      <div>
        <button className="hover:bg-opacity-80 font-bold rounded-md bg-white text-black px-3 md:px-10 py-1.5 md:py-3 mt-3 md:mt-0 text-lg md:text-2xl">
          ▶︎ Play
        </button>
        <button className="bg-opacity-70 hover:bg-opacity-45 font-bold rounded-md mx-6 bg-neutral-500 text-white px-3 md:px-10 py-1.5 md:py-3 text-lg md:text-2xl">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
