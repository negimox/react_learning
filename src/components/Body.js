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
    <div className="mx-[120px]">
      <div className="filter flex justify-left items-center my-10">
        <input
          type="text"
          className="my-2 mx-4 rounded-lg border-2 border-solid border-black"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="my-2 mx-1 px-4 py-1 bg-gray-200 rounded-lg"
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

        <button
          className="my-2 mx-4 px-4 py-2 bg-gray-200 rounded-lg"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info.avgRating > 4.3)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => (
          <div className="mx-3 my-10">
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <div className="transform hover:scale-[.97] hover:cursor-pointer transition-transform duration-250">
                {
                  /* IF RES IS OPEN THEN ADD OPEN LABEL */
                  restaurant.info.isOpen ? (
                    <FoodCardOpen resData={restaurant} />
                  ) : (
                    <FoodCard resData={restaurant} />
                  )
                }
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
