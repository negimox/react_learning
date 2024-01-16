import { Link } from "react-router-dom";

const Footer = () => {
  const handleClick = () => {
    fetch("https://www.swiggy.com/dapi/restaurants/list/update", {
      method: "POST",
      mode: "cors",
    });
  };
  return (
    <div className="px-5 py-2 bg-slate-200">
      <ul className="flex flex-wrap w-[100%] justify-between">
        <li className="links">Links</li>
        <li className="cr">Copyright</li>
        <li className="tc">Terms&Conditions</li>
        <li className=" hover:text-sky-700 font-medium">
          <Link to="/about">About Us</Link>
        </li>
        <li className=" hover:text-sky-700 font-medium">
          <Link to="/contact">Contact Us</Link>
        </li>
        <button
          className="border-3 border-solid border-black"
          onClick={handleClick}
        >
          CLICK ME
        </button>
      </ul>
    </div>
  );
};

export default Footer;
