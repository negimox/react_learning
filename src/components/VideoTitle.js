import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen h-screen text-white pt-[27%] md:pt-[17%] md:px-24 absolute">
      <div className="w-screen flex flex-col justify-center pt-[80%] absolute z-10 md:pt-0">
        <h1 className="md:m-0 m-auto font-bold text-4xl md:text-6xl">
          {title}
        </h1>
        <p className="py-6 text-sm hidden md:inline-block md:text-lg md:w-1/3 text-neutral-300">
          {overview}
        </p>
        <div className="md:m-0 m-auto">
          <button className="hover:bg-opacity-80 font-bold rounded-md bg-white text-black px-3 md:px-10 py-1.5 md:py-3 mt-3 md:mt-0 text-lg md:text-2xl">
            ▷ Play
          </button>
          <button className="bg-opacity-70 hover:bg-opacity-45 font-bold rounded-md ml-6 bg-neutral-500 text-white px-3 md:px-10 py-1.5 md:py-3 text-lg md:text-2xl">
            ⓘ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
