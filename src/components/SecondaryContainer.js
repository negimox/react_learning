import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import SecondaryShimmer from "./SecondaryShimmer";
import { useState } from "react";
import Info from "./Info";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (
    !movies.nowPlayingMovies ||
    !movies.popularMovies ||
    !movies.topRatedMovies
  )
    return (
      <>
        <SecondaryShimmer />
        <SecondaryShimmer />
        <SecondaryShimmer />
        <SecondaryShimmer />
        <SecondaryShimmer />
      </>
    );

  return (
    <div className="bg-black md:-my-28 lg:my-0 select-none">
      <div className="lg:-mt-[10%] md:-mt-[8%] mt-[5%] pl-0 relative z-20">
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
