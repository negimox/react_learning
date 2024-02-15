import { useDispatch } from "react-redux";
import {
  addInfoItem,
  addMainVideo,
  changeInfoShow,
} from "../utils/configSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const VideoTitle = (props) => {
  const dispatch = useDispatch();
  const handleInfoClick = () => {
    dispatch(addInfoItem(props.movie));
    dispatch(changeInfoShow());
  };
  const handleClick = () => {
    // console.log("cleared");
    dispatch(addMainVideo(null));
  };
  const { title, overview, id } = props.movie;

  return (
    <div>
      <div className="w-full h-screen text-white pt-[27%] md:pt-[17%] md:pl-16 lg:pl-24 absolute flex justify-center md:block">
        <div className="w-fit flex flex-col justify-center pt-[80%] absolute z-[40] md:pt-0">
          <h1 className="mx-auto md:m-0 font-bold text-3xl md:text-4xl lg:text-6xl">
            {title}
          </h1>
          <p className="py-4 hidden md:inline-block md:text-base lg:text-lg text-ellipsis overflow-hidden text-neutral-300 max-h-40 lg:max-h-fit md:max-w-md lg:max-w-lg">
            {overview}
          </p>
          <div className="md:m-0 mx-auto pt-3 lg:pt-0">
            <Link to={"play/" + id}>
              <button
                onClick={handleClick}
                className="hover:bg-opacity-80 font-bold rounded-md bg-white text-black px-3 md:px-6 lg:px-10 py-1.5 md:py-2 lg:py-3 text-lg md:text-2xl"
              >
                ▷ Play
              </button>
            </Link>
            <button
              onClick={handleInfoClick}
              className="bg-opacity-70 hover:bg-opacity-45 font-bold rounded-md ml-6 bg-neutral-500 text-white px-3 md:px-6 lg:px-10 py-1.5 md:py-2 lg:py-3 text-lg md:text-2xl"
            >
              ⓘ More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
