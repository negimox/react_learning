import Arrow from "../utils/arrow";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title, index }) => {
  return (
    <div className="pb-14 px-6 text-white">
      <h1 className="py-6 font-medium text-xl md:text-3xl">{title}</h1>

      <div className="relative">
        <div
          className={
            "flex overflow-x-hidden scroll-smooth no-scrollbar list-" + index
          }
        >
          {movies.length > 7 && <Arrow type="l" index={index} />}
          <div className="flex justify-center">
            {movies.map((item, index) => (
              <div className={index === 0 ? "m-auto ml-8 mr-4" : "m-auto pr-4"}>
                <div className="hover:shadow-lg hover:shadow-black transition-all duration-500 hover:delay-300 hover:scale-x-[2.5] hover:scale-y-[2.5] mx-0 hover:mx-14 hover:cursor-pointer">
                  <MovieCard item={item} />
                </div>
              </div>
            ))}
          </div>
          {movies.length > 7 && <Arrow type="r" index={index} />}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
