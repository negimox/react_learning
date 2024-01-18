import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState([true]);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <div className="bg-black/60 w-full h-full absolute z-9"></div>
      <img
        className="z-7"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="bg"
      />
      <form className="text-white rounded-md right-0 left-0 top-0 mx-auto my-24 absolute w-3/12 p-12 bg-black/65">
        <h1 className="text-3xl font-bold my-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="rounded-md p-4 my-4 w-full bg-neutral-800"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="rounded-md p-4 my-4 w-full bg-neutral-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-md p-4 my-4 w-full bg-neutral-800"
        />
        <button className="hover:cursor-pointer rounded-md px-2 py-4 my-8 bg-red-700 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="my-4 text-neutral-500 hover:cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already have an account? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
