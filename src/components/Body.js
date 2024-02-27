import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="grid grid-flow-col grid-cols-12">
      {isMenuOpen && (
        <>
          {/* <div className="absolute top-0 left-0 w-full h-full bg-black/75 z-0"></div> */}
          <div className="col-span-3 lg:col-span-2">
            <SideBar />
          </div>
        </>
      )}
      <div className="col-span-12">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
