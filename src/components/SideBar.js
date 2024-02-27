import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="text-white py-4 px-6 text-lg fixed h-full">
      <ul className="pb-5">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Live</li>
      </ul>
      <hr className="" />
      <h1 className="font-bold text-[100%] pt-5 pb-2">Subscriptions</h1>
      <ul className="pb-5">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <hr className="" />

      <h1 className="font-bold text-xl pt-5 pb-2">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      {/* <div class="w-full z-20 h-screen bg-white pr-10">&nbsp;</div> */}
    </div>
  );
};

export default SideBar;
