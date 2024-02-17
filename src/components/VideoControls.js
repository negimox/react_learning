import { forwardRef, useRef, useState } from "react";
import {
  ICO_BACKWARD,
  ICO_FORWARD,
  ICO_FULLSCREEN,
  ICO_MINIMIZE,
  ICO_PAUSE,
  ICO_PLAY,
  ICO_VOLUME,
  ICO_VOLUME_MUTE,
} from "../utils/constants";
import { useSelector } from "react-redux";

const VideoControls = forwardRef(({ onToggleFulscreen, time }, ref) => {
  // let interval;
  const volume = useRef(null);
  const video = useSelector((store) => store.config.mainVideo);

  const [state, setState] = useState({
    playing: video.getPlayerState() === 1 ? true : false,
    mute: false,
    fullscreen: false,
    displayChange: false,
  });

  // console.log(state.mute);
  const handlePlayClick = () => {
    // interval.clear();
    state.playing ? video.pauseVideo() : video.playVideo();
    setState({ ...state, playing: !state.playing });
  };

  const handleVolumeClick = () => {
    const isMute = video.isMuted();
    isMute ? video.unMute() : video.mute();
    setState({ ...state, mute: !state.mute });
  };

  const handleForwardClick = () => {
    video.seekTo(video.getCurrentTime() + 5);
  };
  const handleBackwardClick = () => {
    video.seekTo(video.getCurrentTime() - 5);
  };
  const handleFullscreenClick = () => {
    onToggleFulscreen();
    setState({ ...state, fullscreen: !state.fullscreen });
  };
  const handleFormatChangeClick = () => {
    setState({ ...state, displayChange: !state.displayChange });
  };

  const handlePlayBackRateChange = (e) => {
    video.setPlaybackRate(e.target.value === "normal" ? 1 : +e.target.value);
  };
  const handleVolumeChange = () => {
    video.setVolume(volume.current.value);
  };
  const handleSeekBarChange = (e) => {
    video.seekTo(e.target.value);
  };
  const rates = video.getAvailablePlaybackRates();

  return (
    <div
      ref={ref}
      // onMouseDown={handleMouseDown}
      className="transition-all duration-300 text-white absolute h-screen top-0 left-0 right-0 bottom-0 bg-neutral-800/35 flex flex-col justify-between"
    >
      {/* Having 3 rows of first video title, second controls, lastly slider for video duration etc. */}
      <div class="z-20 grid grid-cols-6 gap-4 h-full p-4 bg-gradient-to-b from-neutral-900 via-transparent">
        {/* TOP CONTROLS */}
        <div class="col-span-6 select-none">
          <h2 className="text-2xl font-bold">{video.videoTitle}</h2>
        </div>

        {/* MIDDLE CONTROLS */}
        <div class="col-span-6 flex flex-row justify-center self-center">
          <button className="hover-black p-4" onClick={handleBackwardClick}>
            <ICO_BACKWARD />
          </button>
          <button className="hover-black p-4" onClick={handlePlayClick}>
            {state.playing ? <ICO_PAUSE /> : <ICO_PLAY />}
          </button>

          <button className="hover-black p-4" onClick={handleForwardClick}>
            <ICO_FORWARD />
          </button>
        </div>

        {/* <div class="col-start-1 col-end-2 bg-slate-400">02</div>
        <div class="col-end-7 col-span-2 bg-slate-300">03</div> */}

        {/* BOTTOM CONTROLS */}
        <div class="col-span-6 flex flex-col-reverse">
          <div className="w-full">
            {/* ADDITIONAL VIDEO CONTROLS FOR SM Devices */}
            <div className="flex md:hidden flex-row justify-between">
              {/* LEFT SIDE */}
              <div class="flex flex-row mx-1 md:mx-4 text-lg md:text-lg">
                <button
                  onClick={handleFormatChangeClick}
                  className="my-auto ml-2"
                >
                  {state.displayChange
                    ? "-" + time.played_rev
                    : time.played + " / " + time.duration_text}
                </button>
                {/* <VideoTime type="duration" /> */}
              </div>

              {/* RIGHT SIDE */}
              <div class="flex flex-row mx-1 md:mx-4 text-sm md:text-lg">
                <select
                  onChange={handlePlayBackRateChange}
                  className="my-auto bg-transparent custom-select cursor-pointer"
                >
                  {rates.map((rate) =>
                    rate === 1 ? (
                      <option value="normal" selected>
                        Normal
                      </option>
                    ) : (
                      <option value={rate}>{rate}</option>
                    )
                  )}
                </select>
                <button
                  onClick={handleFullscreenClick}
                  className="my-auto ml-1 md:ml-4 hover-black p-2"
                >
                  {state.fullscreen ? <ICO_MINIMIZE /> : <ICO_FULLSCREEN />}{" "}
                </button>
              </div>
            </div>
            <input
              //   ref={volume}
              onChange={handleSeekBarChange}
              className="w-full hover:cursor-pointer"
              type="range"
              min="0"
              value={time.played_raw}
              max={time.duration}
            />
            {/* <VideoTime type="bar" /> */}

            {/* ADDITIONAL VIDEO CONTROLS FOR MD,LG Devices */}
            <div className="hidden md:flex flex-row justify-between">
              {/* LEFT SIDE */}
              <div class="flex flex-row mx-1 md:mx-4 text-sm md:text-lg">
                <button className="hover-black p-2" onClick={handleVolumeClick}>
                  {state.mute ? <ICO_VOLUME_MUTE /> : <ICO_VOLUME />}
                </button>
                <input
                  ref={volume}
                  onChange={handleVolumeChange}
                  className="my-auto ml-2"
                  type="range"
                  value={video.getVolume()}
                  min="0"
                  max="100"
                />
                <button
                  onClick={handleFormatChangeClick}
                  className="my-auto ml-2"
                >
                  {state.displayChange
                    ? "-" + time.played_rev
                    : time.played + " / " + time.duration_text}
                </button>
                {/* <VideoTime type="duration" /> */}
              </div>

              {/* RIGHT SIDE */}
              <div class="flex flex-row mx-1 md:mx-4 text-sm md:text-lg">
                <select
                  onChange={handlePlayBackRateChange}
                  className="my-auto bg-transparent custom-select cursor-pointer"
                >
                  {rates.map((rate) =>
                    rate === 1 ? (
                      <option value="normal" selected>
                        Normal
                      </option>
                    ) : (
                      <option value={rate}>{rate}</option>
                    )
                  )}
                </select>
                <button
                  onClick={handleFullscreenClick}
                  className="my-auto ml-1 md:ml-4 hover-black p-2"
                >
                  {state.fullscreen ? <ICO_MINIMIZE /> : <ICO_FULLSCREEN />}{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default VideoControls;
