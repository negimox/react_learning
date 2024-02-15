import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const VideoTime = ({ type }) => {
  const video = useSelector((store) => store.config.mainVideo);

  const [time, setTime] = useState({
    played: "00:00",
    played_raw: 0,
    played_rev: "00:00",
  });
  const [displayChange, setDisplayChange] = useState(false);
  const handleSeekBarChange = (e) => {
    video.seekTo(e.target.value);
  };
  const handleFormatChangeClick = () => {
    setDisplayChange(!displayChange);
  };
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

  useEffect(() => {
    const interval = setInterval(async () => {
      const elapsed_sec = await video.getCurrentTime();
      const duration = await video.getDuration();
      const time = BeautifyTime(elapsed_sec);
      const rev_time = BeautifyTime(duration - elapsed_sec);

      setTime({
        played: time,
        played_raw: Math.floor(elapsed_sec),
        played_rev: rev_time,
      });
    }, 500); // 100 ms refresh. increase it if you don't require millisecond precision

    return () => {
      clearInterval(interval);
    };
  }, []);

  const duration = video.getDuration();
  const duration_beautify = BeautifyTime(duration);

  return type === "bar" ? (
    <input
      //   ref={volume}
      onChange={handleSeekBarChange}
      className="w-full hover:cursor-grab"
      type="range"
      min="0"
      value={time.played_raw}
      max={Math.floor(duration)}
    />
  ) : (
    <button onClick={handleFormatChangeClick} className="my-auto ml-2">
      {displayChange
        ? "-" + time.played_rev
        : time.played + " | " + duration_beautify}
    </button>
  );
};

export default VideoTime;
