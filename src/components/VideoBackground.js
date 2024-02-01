import useMovieVideo from "../hooks/useMovieVideo";
import { useSelector } from "react-redux";
import { IMG_CDN } from "../utils/constants";
import Video from "./Video";

const VideoBackground = ({ movieID }) => {
  useMovieVideo(movieID);
  const trailerVideo = useSelector((store) => store.movies?.addTrailerVideo);
  const poster_path = useSelector(
    (store) => store.movies?.nowPlayingMovies[0].poster_path
  );

  return (
    <div className="">
      <div className="w-full hidden md:block md:h-2/3 lg:h-full absolute top-0 left-0 z-10 bg-gradient-to-t from-black via-black via-[15%]"></div>

      <Video trailerVideo={trailerVideo} small={false} />

      <img
        className="rounded-md hover:rounded-none w-screen aspect-auto inline-block md:hidden"
        alt="Movie Card"
        src={IMG_CDN + poster_path}
      />
    </div>
  );
};

export default VideoBackground;
