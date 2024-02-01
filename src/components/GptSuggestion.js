import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestion = () => {
  const { gptResult, movieNames } = useSelector((store) => store.gpt);
  if (!gptResult) return;
  return (
    <div className="text-white relative z-10 pt-[8%] bg-gradient-to-t from-black via-black via-[93%]">
      <div className="p-4 overflow-auto">
        {movieNames.map((name, index) => (
          <MovieList
            key={name}
            title={name}
            movies={gptResult[index]}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSuggestion;
