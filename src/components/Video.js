import { useRef, useState } from "react";
import YouTube from "react-youtube";
import { ICO_VOLUME, ICO_VOLUME_MUTE } from "../utils/constants";

const Video = ({ trailerVideo }) => {
  const mainVideo = useRef(null);
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

  const onReady = (event) => {
    // Access to player in all event handlers via event.target
    mainVideo.current = event.target;
    console.log(event.target.isMuted());
    // Now you can use playerRef.current to reference the internal player
  };

  const handleClick = () => {
    // const isMutedPromise = mainVideo.current.internalPlayer.isMuted();

    const isMute = mainVideo.current.isMuted();
    isMute ? mainVideo.current.unMute() : mainVideo.current.mute();
    setIsUnMute(isMute);
  };

  return (
    <div>
      <YouTube
        className="you w-screen aspect-video hidden md:inline-block z-10"
        videoId={trailerVideo?.key}
        opts={opts}
        onReady={onReady}
        ref={mainVideo}
      />
      <button
        className="bg-black/75 text-white absolute top-[50%] right-0 z-30 rounded-full p-2 mx-2"
        onClick={handleClick}
      >
        {isUnMute ? <ICO_VOLUME /> : <ICO_VOLUME_MUTE />}
      </button>
      <input className="absolute right-0 z-30" type="range" min="0" max="10" />
    </div>
  );
};

export default Video;
