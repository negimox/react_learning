import languageConstants from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const lang = useSelector((store) => store.config.lang);

  return (
    <div className="mx-4 flex justify-center">
      <form className="grid grid-cols-12 w-1/2 absolute top-[25%]">
        <input
          type="text"
          className="col-span-10 bg-neutral-700 rounded-sm py-3 px-4 mx-4"
          placeholder={languageConstants[lang].gptSearchPlaceHolder}
        />
        <button className="col-span-2 py-2 px-4 mx-4 bg-red-600 hover:bg-red-700 rounded-md text-white">
          {languageConstants[lang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
