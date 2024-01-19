import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  if (
    !movies.nowPlayingMovies ||
    !movies.popularMovies ||
    !movies.topRatedMovies
  )
    return;
  return (
    <div className="bg-black">
      <div className="-mt-64 pl-12 relative z-12">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies.slice(1)}
        />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList
          title={"New Releases"}
          movies={movies.nowPlayingMovies.slice(1)}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
