import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ data }) => {
  const { snippet, statistics, id } = data;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  //   console.log(data);
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 h-full px-2 mb-8">
      <Link to={"/watch?v=" + id}>
        <img
          className="rounded-lg"
          alt="thumbnail"
          src={thumbnails?.maxres?.url || thumbnails?.standard?.url}
        />
        <ul className="pt-4 text-neutral-400 text-sm">
          <li className="font-bold text-lg text-white">{title}</li>
          <li className="pt-1">{channelTitle}</li>
          <li>{viewCount}</li>
        </ul>
      </Link>
    </div>
  );
};

export default VideoCard;
