import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.vectorstock.com/i/preview-1x/73/82/food-logo-vector-38377382.jpg"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Help</li>
        </ul>
      </div>
    </div>
  );
};

const FoodCard = (props) => {
  return (
    <div className="res-card">
      <div className="res-information">
        <img className="res-img" alt="res-logo" src={props.img} />
        <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4>
        <h4>{props.star}</h4>
        <h4>{props.time}</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <FoodCard
          resName="KFC"
          cuisine="KFC, Delhi, India"
          star="4.2"
          time="10 min"
          img="https://t3.ftcdn.net/jpg/05/41/62/96/360_F_541629636_RlfZtQI6uIOW9Uj52x6HpczOlFNVps4L.jpg"
        />

        <FoodCard
          resName="DDN Foodies"
          cuisine="Foodies, Dehradun, India"
          star="4"
          time="24 min"
          img="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704240000&semt=sph"
        />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="links">Links</div>
      <div className="cr">Copyright</div>
      <div className="tc">Terms&Conditions</div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />

      <Body />

      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
