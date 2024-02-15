import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { ICO_SEARCH, LOGO_URL, SUPPORTED_LANG } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLang } from "../utils/configSlice";

const Header = () => {
  const userData = useSelector((info) => info.user);
  const gptView = useSelector((store) => store.gpt.showGptSearch);
  const accent = useSelector((store) => store.config.accent);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in / sign up
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    //  bg-gradient-to-b from-black via-black via-[8%]
    <>
      {/* <div
        className={`bg-gradient-to-b from-[${colorVariants.color}] via-[${colorVariants.color}] block md:hidden z-10 w-full h-[85vh] absolute top-0 left-0`}
      ></div> */}
      <div className="absolute flex flex-row md:flex-row md:justify-between px-0 md:px-8 py-2 z-50 w-full">
        <div className="hidden md:block w-full h-full absolute top-0 lg:top-[5%] left-0 -z-10 bg-gradient-to-b from-black via-black md:via-[55%] lg:via-[75%]"></div>
        <img className="w-40 mx-auto md:mx-0" src={LOGO_URL} alt="logo" />
        {userData && (
          <div className="flex flex-wrap mx-auto md:mx-0 md:px-8 md:py-2 items-center">
            {gptView && (
              <select
                className="p-2 bg-neutral-600 text-white rounded-md"
                onChange={handleLangChange}
              >
                {SUPPORTED_LANG.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="py-2 px-3 mx-3 md:mx-8 bg-red-600 hover:bg-red-700 text-white rounded-md"
              onClick={handleGptSearchClick}
            >
              {gptView ? (
                "Home"
              ) : (
                <div className="flex">
                  <ICO_SEARCH />
                  <h2 className="hidden pl-2 md:block">GPT Search</h2>
                </div>
              )}
            </button>
            <img
              className="w-10 h-10 rounded-md"
              src={userData.photoURL}
              alt="usr_ico"
            />
            <div className="flex flex-col md:flex-row py-2">
              <h2 className="font-bold text-sm md:text-lg text-white px-3">
                {userData.displayName}
              </h2>
              <button
                onClick={handleClick}
                className="text-white px-3 font-bold"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
