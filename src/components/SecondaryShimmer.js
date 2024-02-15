const SecondaryShimmer = () => {
  const movies = [["1"], ["2"], ["3"], ["4"], [], [], [], [], [], [], []];
  return (
    <div className="bg-black md:pt-16 lg:pt-0 select-none lg:pb-20">
      <div className="lg:-mt-[10%] md:-mt-[8%] -mt-[5%] pl-0 lg:pb-10 relative z-10">
        <div className="pb-14 px-2 md:px-6">
          <div className="py-6 mt-12 mb-6 bg-neutral-800 w-1/3"></div>

          <div className="relative">
            <div className="flex overflow-y-hidden overflow-x-hidden scroll-smooth no-scrollbar">
              <div className="left-4 bg-gradient-to-r flex justify-center absolute h-[100%] top-0 from-black via-black via-15%">
                <div className="bg-gray-400/45 hover:cursor-pointer rounded-full p-6 m-auto"></div>
              </div>

              <div className="flex justify-center">
                {movies.map((item, index) => (
                  <div
                    key={index}
                    className={index === 0 ? "m-auto ml-8 mr-4" : "m-auto pr-4"}
                  >
                    <div className="w-52 bg-neutral-700 h-60 md:h-80"></div>
                  </div>
                ))}
              </div>

              <div className="-right-3 bg-gradient-to-l flex justify-center absolute h-[100%] top-0 from-black via-black via-15%">
                <div className="bg-gray-400/45 hover:cursor-pointer rounded-full p-6 m-auto"></div>
              </div>
              {/* {movies.length > 7 && <Arrow type="r" index={index} />} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryShimmer;
