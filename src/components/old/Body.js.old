import FoodCard from "./FoodCard";
import ResData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState(ResData);
  // Normal JS Variable
  // let listOfRestaurants = [];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info.avgRating > 4.3)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <FoodCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
