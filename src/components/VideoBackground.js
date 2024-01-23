import useMovieVideo from "../hooks/useMovieVideo";
import { useSelector } from "react-redux";
import { IMG_CDN } from "../utils/constants";

const VideoBackground = ({ movieID }) => {
  useMovieVideo(movieID);
  const trailerVideo = useSelector((store) => store.movies?.addTrailerVideo);
  const poster_path = useSelector(
    (store) => store.movies?.nowPlayingMovies[0].poster_path
  );
  return (
    <div className="">
      <div className="w-screen h-screen absolute z-8 bg-gradient-to-b from-black via-transparent"></div>

      <iframe
        className="w-screen aspect-video hidden md:inline-block"
        src={
          "https://www.youtube-nocookie.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&playlist=" +
          trailerVideo?.key
        }
        title="Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <img
        className="rounded-md hover:rounded-none w-screen aspect-auto inline-block md:hidden"
        alt="Movie Card"
        src={IMG_CDN + poster_path}
      />
    </div>
  );
};

export default VideoBackground;
