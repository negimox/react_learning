import { useRef } from "react";
import languageConstants from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import fetchMovie from "../utils/fetchMovie";
import { addGptResult } from "../utils/gptSlice";
import { ICO_SEARCH } from "../utils/constants";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const lang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Provide movie recommendation and suggestion for the query: " +
      searchText.current.value +
      ". Only give names of maximum 10 movies, comma seperated like the example result provided ahed. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya, Jai Ho, Ra-one, KGF, Raw, Pathaan";
    // API call to GPT API to get results
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    // TODO: ERROR IF GPT SEARCH FAILS.
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");

    //This return a promise
    const promiseArray = gptMovies.map((name) => fetchMovie(name));

    const results = await Promise.all(promiseArray);
    dispatch(addGptResult({ movieNames: gptMovies, gptResults: results }));
  };

  return (
    <div className="pt-[55%] md:pt-[15%] mx-4 flex justify-center">
      <form
        name="search"
        className="grid grid-cols-12 w-full md:w-1/2 relative z-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="col-span-10 bg-neutral-700 rounded-sm py-3 px-4 mx-4 text-white"
          placeholder={languageConstants[lang].gptSearchPlaceHolder}
          ref={searchText}
        />
        <button
          className="p-3 m-auto bg-red-700 hover:bg-red-800 rounded-md text-white"
          onClick={handleGptSearchClick}
        >
          <div className="flex">
            <ICO_SEARCH />
            <div className="hidden md:inline-block md:pl-2">
              {languageConstants[lang].search}
            </div>
          </div>
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
