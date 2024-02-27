import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState(null);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(
      YOUTUBE_VIDEO_API + process.env.REACT_APP_GOOGLE_API_KEY
    );
    const json = await data.json();
    // console.log(json);
    setVideoList(json.items);
  };
  if (!videoList) return;
  return (
    <div className="grid-cols-12 flex flex-wrap mb-auto text-white mt-8">
      {videoList.map((video) => (
        // <Link key={video.id} to={"/watch?v=" + video.id}>
        <VideoCard key={video.id} data={video} />
        // </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
