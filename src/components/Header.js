import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="flex justify-between shadow-lg mb-5">
      <div className="px-4 mx-4">
        <img className="w-32" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex px-4 mx-4">
          <li className="px-5">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-5">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-5">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-5">Cart</li>
          <button
            className="px-5 border border-solid border-black bg-gray-200 rounded-lg"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="font-bold px-5">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
