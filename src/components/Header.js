import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const userData = useSelector((info) => info.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
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
    <div className="absolute flex justify-between px-8 py-2 z-10 w-full bg-gradient-to-b from-black">
      <img className="w-44" src={LOGO_URL} alt="logo" />
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
