import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const userData = useSelector((info) => info.user);
  const navigate = useNavigate();
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute flex justify-between px-8 py-2 z-10 w-full bg-gradient-to-b from-black">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {userData && (
        <div className="flex px-8 py-2 items-center">
          <img
            className="w-10 h-10 rounded-md"
            src={userData.photoURL}
            alt="usr_ico"
          />
          <h2 className="font-bold text-lg text-white px-3">
            {userData.displayName}
          </h2>
          <button onClick={handleClick} className="text-white px-3 font-bold">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
