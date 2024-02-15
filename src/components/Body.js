import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import Info from "./Info";
import Player from "./Player";

const Body = () => {
  const showMoreInfo = useSelector((store) => store.config.infoShow);
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/browse/play/:movieId",
      element: <Player />,
    },
  ]);

  return (
    <div className="bg-black">
      <RouterProvider router={appRouter} />
      {showMoreInfo && <Info />}
      <Footer />
    </div>
  );
};

export default Body;
