import { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import { ICO_VOLUME, ICO_VOLUME_MUTE } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMainVideo } from "../utils/configSlice";

let total, myTimer, time, playerTimeDifference;

const Video = ({ trailerVideo, small, isGradient }) => {
  const [ready, setReady] = useState(false);
  const mainVideo = useRef(null);
  const volume = useRef(null);
  const dispatch = useDispatch();

  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      mute: 1,
      playlist: trailerVideo?.key,
    },
  };

  const [isUnMute, setIsUnMute] = useState(false);
  const [isHover, setIsHover] = useState("0 pointer-events-none");

  const onReady = (event) => {
    // Access to player in all event handlers via event.target
    mainVideo.current = event.target;
    setReady(true);
    //dispatch(addMainVideo(mainVideo.current));
    // small && mainVideo.current.unMute();
    // small && mainVideo.current.playVideo();
    // mainVideo.current.pauseVideo();
    // Now you can use playerRef.current to reference the internal player
  };

  const onStateChange = (event) => {
    if (small) return;

    const data = {
      pauseVideo: () => event.target.pauseVideo(),
      playVideo: () => event.target.playVideo(),
    };

    dispatch(addMainVideo(data));
  };

  const handleClick = (e) => {
    e.stopPropagation();
    const isMute = mainVideo.current.isMuted();
    isMute ? mainVideo.current.unMute() : mainVideo.current.mute();
    setIsUnMute(isMute);
  };

  const handleChange = () => {
    mainVideo.current.setVolume(volume.current.value);
  };

  const handleMouseEnter = () => {
    setIsHover("100 pointer-events-auto");
  };

  const handleMouseExit = () => {
    setIsHover("0 pointer-events-none");
  };

  return (
    <div className={small ? "" : "hidden md:block"}>
      <div className="w-full aspect-video relative">
        <div className="w-full h-full absolute top-0 lg:top-[5%] left-0 z-10 bg-gradient-to-t from-black via-black md:via-[10%] lg:via-[17%]"></div>
        {!small ? (
          <YouTube
            className="[&>iframe]:left-0 [&>iframe]:top-0 [&>iframe]:h-full [&>iframe]:w-full w-full h-full"
            videoId={trailerVideo?.key}
            opts={opts}
            onReady={onReady}
            onStateChange={onStateChange}
            ref={mainVideo}
          />
        ) : (
          <YouTube
            className="[&>iframe]:left-0 [&>iframe]:top-0 [&>iframe]:h-full [&>iframe]:w-full fixed scale-x-[1] scale-y-[1] w-full h-full top-0 left-0 -z-10"
            videoId={trailerVideo?.key}
            opts={opts}
            onReady={onReady}
            ref={mainVideo}
          />
        )}
        {ready && (
          <div
            className={
              small
                ? "w-full z-50 flex justify-end flex-row fixed bottom-[30%] -right-[25%] scale-50"
                : "w-max z-30 flex justify-end flex-row absolute bottom-[10%] lg:bottom-[15%] right-2"
            }
            onMouseLeave={handleMouseExit}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={
                "bg-black/75 rounded-full pt-2 pb-1 px-5 w-fit h-fit transition-all duration-300 opacity-" +
                isHover
              }
            >
              <input
                ref={volume}
                onChange={handleChange}
                className=""
                type="range"
                min="0"
                max="100"
              />
            </div>

            <button
              className="bg-black/75 text-white rounded-full p-2 mx-2"
              onClick={handleClick}
              onMouseEnter={handleMouseEnter}
            >
              {isUnMute ? <ICO_VOLUME /> : <ICO_VOLUME_MUTE />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Video;
