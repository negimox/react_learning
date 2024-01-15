import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const [btnName, setBtnName] = useState("Login");

  // Subscribing to store using selector.
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between shadow-lg mb-5">
      <div className="px-4 mx-4">
        <img className="w-32" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex px-4 mx-4">
          <li className="px-5 hover:text-sky-700 border-b-4 border-transparent hover:border-b-4 hover:border-solid transition font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5 hover:text-sky-700 border-b-4 border-transparent hover:border-b-4 transition font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-5 hover:text-sky-700 border-b-4 border-transparent hover:border-b-4 transition font-bold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-5 hover:text-sky-700 border-b-4 border-transparent hover:border-b-4 transition font-bold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-5 hover:text-sky-700 border-b-4 border-transparent hover:border-b-4 transition font-bold">
            <Link to="/cart">Cart - ({cartItems.length})</Link>
          </li>
          <button
            className="px-5 hover:text-sky-700 border-b-4 border-transparent hover:border-b-4 transition font-bold"
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
