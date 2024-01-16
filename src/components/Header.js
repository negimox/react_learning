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

  return (
    <div className="flex justify-between shadow-lg mb-5 px-5">
      <div>
        <img className="w-32" src={LOGO_URL} />
      </div>

      <ul className="flex items-center">
        <li className="px-5 hover:text-sky-700 hover:border-b-4 hover:border-solid transition-all duration-100 font-bold">
          <Link to="/">Home</Link>
        </li>
        <li className="px-5 hover:text-sky-700 hover:border-b-4 transition-all duration-100 font-bold">
          <Link to="/grocery">Grocery</Link>
        </li>

        <li className="px-5 hover:text-sky-700 hover:border-b-4 transition-all duration-100 font-bold">
          <Link to="/cart">Cart - ({cartItems.length})</Link>
        </li>
        <button
          className="px-5 hover:text-sky-700 hover:border-b-4 transition-all duration-100 font-bold"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
        {btnName === "Logout" && (
          <div className="rounded-full bg-slate-500 w-auto ">
            <li className="font-bold text-[13px] px-5">{loggedInUser}</li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Header;
