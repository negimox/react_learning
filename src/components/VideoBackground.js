import useMovieVideo from "../hooks/useMovieVideo";
import { useSelector } from "react-redux";
import { IMG_CDN } from "../utils/constants";
import YouTube from "react-youtube";
import { useRef, useState } from "react";
import Video from "./Video";

const VideoBackground = ({ movieID }) => {
  useMovieVideo(movieID);
  const [isMuted, setIsMuted] = useState(true);
  const mainVideo = useRef(null);
  const trailerVideo = useSelector((store) => store.movies?.addTrailerVideo);
  const poster_path = useSelector(
    (store) => store.movies?.nowPlayingMovies[0].poster_path
  );
  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      mute: 1,
    },
  };

  const onReady = (event) => {
    // Access to player in all event handlers via event.target
    event.target.unMute();
    console.log(event.target.isMuted());
    // Now you can use playerRef.current to reference the internal player
  };

  const handleClick = () => {
    // const isMutedPromise = mainVideo.current.internalPlayer.isMuted();

    console.log(mainVideo);
    mainVideo.current.internalPlayer.playVideo();
    // if (isMuted) {
    //   mainVideo.current.internalPlayer.unMute();
    // } else {
    //   mainVideo.current.internalPlayer.mute();
    // }
  };
  return (
    <div className="">
      <div className="w-screen h-screen absolute z-8 bg-gradient-to-b from-black via-transparent"></div>

      {/* <iframe
        className="w-screen aspect-video hidden md:inline-block"
        src={
          "https://www.youtube-nocookie.com/embed/" +
          trailerVideo?.key +
          "?enablejsapi=1&autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1&playlist=" +
          trailerVideo?.key
        }
        title="Trailer"
        enableJsApi="1"
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe> */}
      <Video trailerVideo={trailerVideo} />
      {/* <YouTube
        className="you w-screen aspect-video hidden md:inline-block"
        videoId={trailerVideo?.key}
        opts={opts}
        internalPlayer
        onReady={onReady}
        ref={mainVideo}
      />
      <button
        className="bg-white absolute top-[50%] left-0 z-100"
        onClick={handleClick}
      >
        MUTE
      </button> */}
      <img
        className="rounded-md hover:rounded-none w-screen aspect-auto inline-block md:hidden"
        alt="Movie Card"
        src={IMG_CDN + poster_path}
      />
    </div>
  );
};

export default VideoBackground;
