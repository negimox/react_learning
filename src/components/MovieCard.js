import { useState } from "react";
import { IMG_CDN } from "../utils/constants";
import { useSelector } from "react-redux";
import useSelectTrailer from "../hooks/useSelectTailer";
import Video from "./Video";

const MovieCard = ({ item }) => {
  const { poster_path, id } = item;
  const [isHover, setIsHover] = useState(false);
  const [imgOpacity, setImgOpacity] = useState("rounded-md");
  const trailer = useSelector((store) => store.movies.selectTrailerVideo?.[id]);
  useSelectTrailer(id, isHover);

  const handleHover = () => {
    setIsHover(true);
    setImgOpacity("opacity-0 rounded-none");
  };

  const handleLeave = () => {
    setIsHover(false);
    setImgOpacity("rounded-md");
  };

  if (!poster_path) return;
  return (
    <div
      onMouseLeave={handleLeave}
      className="w-max transition-all ease-in-out hover:delay-[600ms] md:hover:h-96 h-60 md:h-80"
    >
      <img
        onMouseEnter={handleHover}
        className={
          "z-12 transition-all duration-300 hover:delay-[400ms] h-full " +
          imgOpacity
        }
        alt="Movie Card"
        src={IMG_CDN + poster_path}
      />
      {isHover && trailer ? (
        <Video trailerVideo={trailer} small={true} />
      ) : (
        // <Video trailerVideo={trailer?.key} />
        <></>
      )}
    </div>
  );
};

export default MovieCard;
