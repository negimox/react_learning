import useMovieVideo from "../hooks/useMovieVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieID }) => {
  useMovieVideo(movieID);
  const trailerVideo = useSelector((store) => store.movies?.addTrailerVideo);
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube-nocookie.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&playlist=" +
          trailerVideo?.key
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
