import { useState } from "react";
import { IMG_CDN } from "../utils/constants";
import { useSelector } from "react-redux";
import useSelectTrailer from "../hooks/useSelectTailer";

const MovieCard = ({ item }) => {
  const { poster_path, id } = item;
  const [isHover, setIsHover] = useState(false);
  const trailer = useSelector((store) => store.movies.selectTrailerVideo?.[id]);
  useSelectTrailer(id, isHover);

  const handleHover = () => {
    setIsHover(true);
  };

  const handleLeave = () => {
    setIsHover(false);
  };

  if (!poster_path) return;
  return (
    <div className=" w-max transition-all ease-in-out hover:delay-[600ms] md:hover:h-96 h-60 md:h-80">
      <img
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className="rounded-md z-12 transition-all duration-500 hover:delay-[400ms] hover:border-white hover:opacity-0 h-full"
        alt="Movie Card"
        src={IMG_CDN + poster_path}
      />
      {isHover && trailer ? (
        <iframe
          className="fixed scale-x-[1] scale-y-[1] w-full h-full top-0 left-0 -z-[999999]"
          src={
            "https://www.youtube-nocookie.com/embed/" +
            trailer?.key +
            "?autoplay=1&mute=1&loop=1&color=black&controls=0&modestbranding=1&playsinline=1&rel=0&playlist=" +
            trailer?.key
          }
          title="Trailer"
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MovieCard;
