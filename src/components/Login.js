import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { DEFAULT_AVATAR, BG_URL } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState([true]);
  const [errMessage, setErrMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setErrMessage(null);
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //Sign Up Logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: DEFAULT_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "- " + errorMessage);
          // ..
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "- " + errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div className="bg-black/60 w-full h-full absolute z-9"></div>
      <img
        className="z-7 h-screen w-screen object-cover"
        src={BG_URL}
        alt="bg"
      />

      <form
        name="login"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="text-white rounded-md right-0 left-0 top-0 mx-auto my-24 absolute w-full md:w-3/12 p-12 bg-black/65"
      >
        <h1 className="text-3xl font-bold my-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <h2 className="text-red-700 text-lg font-bold my-4">{errMessage}</h2>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="rounded-md p-4 my-4 w-full bg-neutral-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="rounded-md p-4 my-4 w-full bg-neutral-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="rounded-md p-4 my-4 w-full bg-neutral-800"
        />
        <button
          className="hover:cursor-pointer rounded-md px-2 py-4 my-8 bg-red-700 hover:bg-red-800 w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="my-4 text-neutral-500 hover:cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Cinewatch? Sign up now."
            : "Already have an account? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
