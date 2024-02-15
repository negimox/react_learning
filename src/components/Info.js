import { useDispatch, useSelector } from "react-redux";
import { ICO_CROSS, ICO_STAR, IMG_CDN } from "../utils/constants";
import { changeInfoShow } from "../utils/configSlice";
import debounce from "debounce";

const Info = () => {
  const dispatch = useDispatch();

  const movie = useSelector((store) => store.config.infoItem);
  const mainVid = useSelector((store) => store.config.mainVideo);
  const { title, overview, vote_average, release_date, backdrop_path } = movie;
  const handleClick = () => {
    mainVid.playVideo();
    dispatch(changeInfoShow());
  };
  const pauseVideo = debounce(() => {
    if (!mainVid) return;
    mainVid.pauseVideo();
  }, 100);

  pauseVideo();

  return (
    <div className="fixed top-0 left-0 w-screen h-screen py-20 px-1 md:px-[15%] z-[60]">
      <div
        onClick={handleClick}
        className="bg-black/75 w-full h-full absolute left-0 top-0"
      ></div>
      <div className="relative w-full h-full bg-neutral-900 text-neutral-400 rounded-md">
        <div className="bg-gradient-to-t from-neutral-900 via-neutral-900 via-[56%] z-10 w-full h-full absolute left-0 top-0"></div>
        <img
          className="z-[5] w-full aspect-auto absolute left-0 top-0 rounded-md bg-fixed bg-center bg-cover"
          alt="Movie Bg"
          src={IMG_CDN + backdrop_path}
        />
        <div onClick={null} className="py-0 md:py-10 px-4 md:px-16">
          <div className="w-full h-screen">
            <div className="w-fit flex flex-col pt-12 absolute z-[30] md:pt-0 justify-center">
              <h1 className="md:m-0 ml-2 font-medium text-2xl md:text-4xl text-white">
                {title}
              </h1>

              <div className="flex flex-wrap pt-2 my-auto">
                {[...Array(5)].map((star, index) => (
                  <div
                    key={index}
                    className={
                      Math.round(vote_average / 2) - 1 >= index
                        ? "text-red-700 my-auto"
                        : "text-neutral-700 my-auto"
                    }
                  >
                    <ICO_STAR />
                  </div>
                ))}
                <h2 className="text-white font-bold text-2xl pl-1 my-auto">
                  {vote_average.toFixed(1)}
                </h2>
                <h2 className="my-auto pl-1 font-medium text-lg">/ 10</h2>
                <span className="my-auto pl-2">&#8226;</span>
                <h2 className="px-2 my-auto font-medium text-lg">
                  {release_date.split("-")[0]}
                </h2>
              </div>
              <p className="py-4 hidden md:inline-block md:text-lg text-ellipsis overflow-hidden text-neutral-300 max-h-40 lg:max-h-fit md:max-w-md lg:max-w-lg">
                {overview}
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={handleClick}
          className="absolute right-5 top-5 z-20 text-white"
        >
          <ICO_CROSS />
        </button>
      </div>
    </div>
  );
};

export default Info;
