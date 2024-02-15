import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useSelectTrailer from "../hooks/useSelectTailer";
import VideoControls from "./VideoControls";
import screenfull from "screenfull";
import { addMainVideo } from "../utils/configSlice";
import YouTube from "react-youtube";

let count = 0,
  myTimer,
  duration;

const Player = () => {
  const dispatch = useDispatch();
  const playerControls = useRef(null);
  const { movieId } = useParams();
  const isHover = true;
  const [time, setTime] = useState({
    played: "00:00",
    played_raw: 0,
    played_rev: "00:00",
    duration: "00:00",
    duration_text: "00:00",
  });

  useSelectTrailer(movieId, isHover);
  const trailer = useSelector(
    (store) => store.movies.selectTrailerVideo?.[movieId]
  );
  const video = useSelector((store) => store.config.mainVideo);
  const playerContainer = useRef(null);

  const BeautifyTime = (elapsed_sec) => {
    // calculations
    const elapsed_ms = Math.floor(elapsed_sec * 1000);
    // const ms = elapsed_ms % 1000;
    const min = Math.floor(elapsed_ms / 60000);
    const seconds = Math.floor((elapsed_ms - min * 60000) / 1000);
    const time =
      min.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");
    return time;
  };

  const toggleFullscreen = () => {
    screenfull.toggle(playerContainer.current);
  };

  const handleMouseMove = () => {
    if (!playerControls.current) return;
    playerControls.current.style.visibility = "visible";
    count = 0;
  };

  const onReady = (event) => {
    // Access to player in all event handlers via event.target
    duration = event.target.getDuration();
    const duration_text = BeautifyTime(duration);

    setTime({
      ...time,
      duration: Math.floor(duration),
      duration_text: duration_text,
    });

    // setReady(true);
    //dispatch(addMainVideo(mainVideo.current));
    // small && mainVideo.current.unMute();
    // small && mainVideo.current.playVideo();
    // mainVideo.current.pauseVideo();
    // Now you can use playerRef.current to reference the internal player
  };

  const onStateChange = (event) => {
    //
    if (event.data == 1) {
      myTimer = setInterval(() => {
        // TIME CALC
        const elapsed_sec = event.target.getCurrentTime();
        const time = BeautifyTime(elapsed_sec);
        const rev_time = BeautifyTime(duration - elapsed_sec);
        const duration_text = BeautifyTime(duration);
        setTime({
          played: time,
          played_raw: Math.floor(elapsed_sec),
          played_rev: rev_time,
          duration: Math.floor(duration),
          duration_text: duration_text,
        });
        if (!playerControls.current) return;
        // VISIBILITY TIMER
        if (count > 3) {
          // console.log(playerControls.current.style);
          playerControls.current.style.visibility = "hidden";
          count = 0;
        }
        if (playerControls.current.style.visibility === "visible") {
          count += 1;
        }
      }, 1000); // 100 means repeat in 100 ms
    }
    dispatch(addMainVideo(event.target));
  };

  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      mute: 1,
      playlist: trailer?.key,
    },
  };

  useEffect(() => {
    return () => clearInterval(myTimer);
  }, []);

  if (!trailer) return;
  return (
    <div
      ref={playerContainer}
      onMouseMove={handleMouseMove}
      className="w-auto h-screen"
    >
      <div className="my-auto bg-black w-full h-screen max-w-screen relative flex justify-center">
        <div className="my-auto w-full h-full pointer-events-none">
          {/* <Video
            className="my-auto"
            trailerVideo={trailer}
            small={false}
            isGradient={false}
          /> */}
          <YouTube
            className="[&>iframe]:left-0 [&>iframe]:top-0 [&>iframe]:h-full [&>iframe]:w-full w-full h-full"
            videoId={trailer?.key}
            opts={opts}
            onReady={onReady}
            onStateChange={onStateChange}
          />
        </div>
        {video ? (
          <div>
            <VideoControls
              ref={playerControls}
              time={time}
              onToggleFulscreen={toggleFullscreen}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Player;
