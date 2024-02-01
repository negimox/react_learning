import {
  ICO_LEFT_ARROW,
  ICO_RIGHT_ARROW,
  SCROLL_INCREMENT_AMOUNT,
} from "./constants";

const Arrow = ({ type, index }) => {
  const tabsList = document.querySelector("." + "list-" + index);
  const isRight = type === "r";
  // const arrowOther = document.querySelector("." + isRight ? "l" : "r");
  // const [display, setDisplay] = useState(isRight ?  "r flex" : "l hidden");
  const cssPos = isRight
    ? " -right-3 bg-gradient-to-l "
    : " -left-3 bg-gradient-to-r ";

  const handleIcons = () => {
    const scrollVal = tabsList.scrollLeft;
    const arrowOther = document.querySelector(".l");

    console.log(arrowOther);
    arrowOther.style.display = scrollVal > 0 ? "flex" : "flex";
  };

  const handleArrowClick = () => {
    isRight
      ? (tabsList.scrollLeft += SCROLL_INCREMENT_AMOUNT)
      : (tabsList.scrollLeft -= SCROLL_INCREMENT_AMOUNT);
    // handleIcons();
  };

  return (
    <div
      className={
        "flex justify-center absolute" +
        cssPos +
        "h-[100%] top-0 from-black via-black via-15%"
      }
    >
      <div
        className="hover:bg-gray-400/45 hover:cursor-pointer rounded-full p-3 m-auto"
        onClick={handleArrowClick}
      >
        {isRight ? <ICO_RIGHT_ARROW /> : <ICO_LEFT_ARROW />}
      </div>
    </div>
  );
};

export default Arrow;
