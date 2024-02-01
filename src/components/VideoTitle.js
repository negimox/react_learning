const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full h-screen text-white pt-[27%] md:pt-[17%] md:pl-24 absolute">
      <div className="w-fit flex flex-col justify-center pt-[80%] absolute z-[30] md:pt-0">
        <h1 className="md:m-0 ml-2 font-bold text-3xl md:text-6xl">{title}</h1>
        <p className="py-4 hidden md:inline-block md:text-lg text-ellipsis overflow-hidden text-neutral-300 max-h-40 lg:max-h-fit md:max-w-md lg:max-w-lg">
          {overview}
        </p>
        <div className="md:m-0 m-auto pt-3 lg:pt-0">
          <button className="hover:bg-opacity-80 font-bold rounded-md bg-white text-black px-3 md:px-10 py-1.5 md:py-3 text-lg md:text-2xl">
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
