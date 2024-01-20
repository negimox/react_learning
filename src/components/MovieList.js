import Arrow from "../utils/arrow";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title, index }) => {
  const handleArrowClick = () => {
    console.log("WATT");
    const tabsList = document.querySelector(".list");
    tabsList.scrollLeft += 200;
  };

  return (
    <div className="pb-14 px-6 text-white">
      <h1 className="py-6 font-medium text-3xl">{title}</h1>

      <div className="relative">
        <div
          className={
            "flex overflow-x-hidden scroll-smooth no-scrollbar list-" + index
          }
        >
          <Arrow type="l" index={index} />
          <div className="flex">
            {movies.map((item, index) => (
              <div className={index === 0 ? "pl-5 pr-7" : "pr-7"}>
                <div className="transition-all duration-100 hover:cursor-pointer hover:border-4 hover:border-solid hover:border-white">
                  <MovieCard item={item} />
                </div>
              </div>
            ))}
            <Arrow type="r" index={index} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
