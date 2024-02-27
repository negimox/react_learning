import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
      <div className="my-4 mx-6 col-span-12 flex flex-row justify-between">
        <iframe
          className="rounded-lg w-full aspect-video"
          src={
            "https://www.youtube-nocookie.com/embed/" +
            searchParams.get("v") +
            "?si=u3ys0AOGqlr7BrkR&autoplay=1&mute=0"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <LiveChat />
      </div>
      <CommentsContainer />
    </>
  );
};

export default WatchPage;
