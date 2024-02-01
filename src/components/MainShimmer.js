const MainShimmer = () => {
  return (
    <div>
      <div className="bg-black pt-[30%] md:pt-0">
        <div className="w-full h-screen text-white pt-[27%] md:pt-[17%] md:pl-24 absolute">
          <div className="w-fit flex flex-col justify-center pt-[80%] absolute z-[30] md:pt-0">
            <div className="my-4 font-bold bg-neutral-700 w-full h-16"></div>
            <div className="mb-6 py-20 bg-neutral-600 max-h-40 lg:max-h-fit md:max-w-md lg:max-w-lg"></div>
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
        {/* VIDEO BG SHIMMER */}
        <div className="w-full h-fit relative">
          <div className="aspect-video w-full bg-neutral-600"></div>
          <div className="w-full h-full absolute top-0 left-0 z-10 bg-black/65"></div>
          <div className="w-full h-full absolute top-1/3 left-0 z-10 bg-gradient-to-t from-black via-black via-[15%]"></div>
        </div>
      </div>
    </div>
  );
};

export default MainShimmer;
