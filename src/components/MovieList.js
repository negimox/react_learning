import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (
    <div className="pb-14 px-6 text-white">
      <h1 className="py-6 font-medium text-3xl">{title}</h1>

      <div className="flex overflow-x-auto scroll-smooth pb-3">
        {/* MovieList - Popular
            MovieCard*n
            MovieList - Now Playing
            etc
          */}

        <div className="flex">
          {movies.map((item) => (
            <div className="pr-6">
              <div className="transition-all duration-100 hover:cursor-pointer hover:border-4 hover:border-solid hover:border-white">
                <MovieCard item={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
