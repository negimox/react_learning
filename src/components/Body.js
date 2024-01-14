import FoodCard, { withOpenLabel } from "./FoodCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantCard from "../utils/useRestaurantCard";

const Body = () => {
  // Local State Variable
  const listOfRestaurants = useRestaurantCard();
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(listOfRestaurants);

  const FoodCardOpen = withOpenLabel(FoodCard);
  // Conditional Rendering
  // if(listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  if (listOfRestaurants === null) {
    return <Shimmer />;
  } else if (filteredRestaurants === null) {
    setFilteredRestaurants(listOfRestaurants);
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 m-4 bg-gray-200 rounded-lg"
            onClick={() => {
              //Filter the restaurant card n update UI
              const filteredRes = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRes);
            }}
          >
            Search
          </button>
        </div>

        <div className="search m-4 p-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={() => {
              setListOfRestaurants(
                listOfRestaurants.filter((res) => res.info.avgRating > 4.3)
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {
              /* IF RES IS OPEN THEN ADD OPEN LABEL */
              restaurant.info.isOpen ? (
                <FoodCardOpen resData={restaurant} />
              ) : (
                <FoodCard resData={restaurant} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
