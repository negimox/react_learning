import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // const filteredList = movies.map((item) => !item?.type);
  // console.log(filteredList);
  if (
    !movies.nowPlayingMovies ||
    !movies.popularMovies ||
    !movies.topRatedMovies
  )
    return;
  return (
    <div className="bg-black md:pt-16 lg:pt-0">
      <div className="lg:-mt-[12%] md:mt-0 mt-0 pl-1 lg:pl-12 relative z-12">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies.slice(1)}
          index="0"
        />

        <MovieList
          title={"Top Rated"}
          movies={movies.topRatedMovies}
          index="1"
        />
        <MovieList title={"Popular"} movies={movies.popularMovies} index="2" />
        <MovieList
          title={"New Releases"}
          movies={movies.nowPlayingMovies.slice(1)}
          index="3"
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
