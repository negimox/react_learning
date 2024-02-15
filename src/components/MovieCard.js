import { useCallback, useEffect, useState } from "react";
import { IMG_CDN } from "../utils/constants";
import { useSelector } from "react-redux";
import useSelectTrailer from "../hooks/useSelectTailer";
import Video from "./Video";
import debounce from "debounce";
import Test from "./Test";

const MovieCard = ({ item }) => {
  const { poster_path, id } = item;
  const [isHover, setIsHover] = useState(false);
  const [imgOpacity, setImgOpacity] = useState("rounded-md");
  let showMoreInfoLocal = false;
  const trailer = useSelector((store) => store.movies.selectTrailerVideo?.[id]);
  useSelectTrailer(id, isHover);
  const handleHover = useCallback(
    debounce(() => {
      if (showMoreInfoLocal) return;
      setIsHover(true);
      setImgOpacity("opacity-0 rounded-none");
    }, 700),
    [showMoreInfoLocal]
  );

  const handleLeave = () => {
    handleHover.clear();
    if (isHover) {
      setIsHover(false);
      setImgOpacity("rounded-md");
    }
  };

  const handleClick = () => {
    showMoreInfoLocal = true;
    handleLeave();
  };

  if (!poster_path) return;
  return (
    <div>
      <div
        onClick={handleClick}
        onMouseLeave={handleLeave}
        className="w-max transition-all ease-in hover:delay-500 md:hover:h-96 h-52 md:h-80"
      >
        <img
          onMouseEnter={handleHover}
          className={
            "z-10 transition-all duration-300 w-max h-full " + imgOpacity
          }
          alt="Movie Card"
          src={IMG_CDN + poster_path}
        />
        {isHover && trailer ? (
          <Video trailerVideo={trailer} small={true} isGradient={false} />
        ) : (
          // <Video trailerVideo={trailer?.key} />
          <></>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
