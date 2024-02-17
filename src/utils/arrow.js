import debounce from "debounce";
import {
  ICO_LEFT_ARROW,
  ICO_RIGHT_ARROW,
  SCROLL_INCREMENT_AMOUNT,
} from "./constants";

const Arrow = ({ type, index }) => {
  let activeDrag = false;
  const isRight = type === "r";
  const tabsList = document.querySelector("." + "list-" + index);
  const arrowList = document.querySelectorAll(".arrow-" + index);
  //console.log(arrowOther);
  // const arrowOther = document.querySelector("." + isRight ? "l" : "r");
  // const [display, setDisplay] = useState(isRight ?  "r flex" : "l hidden");
  const cssPos = isRight
    ? " -right-1 top-0 bottom-0 md:-right-5 bg-gradient-to-l flex "
    : " -left-1 top-0 bottom-0 md:-left-3 bg-gradient-to-r hidden ";

  const handleIcons = (amt) => {
    const scrollVal = Math.round(tabsList.scrollLeft + amt);
    const scrollWidth = tabsList.scrollWidth - tabsList.clientWidth;
    arrowList[0].style.display = scrollVal > 0 ? "flex" : "none";
    arrowList[1].style.display = scrollWidth > scrollVal ? "flex" : "none";
  };

  const handleArrowClick = () => {
    const incrementAmt = isRight
      ? +SCROLL_INCREMENT_AMOUNT
      : -SCROLL_INCREMENT_AMOUNT;
    tabsList.scrollLeft += incrementAmt;
    handleIcons(incrementAmt);
  };

  if (!tabsList) return;
  tabsList.addEventListener("pointermove", (e) => {
    if (!activeDrag) return;
    if (window.innerWidth < 768) {
      tabsList.style.scrollBehavior = "auto";
      tabsList.scrollLeft -= e.movementX;
    }
  });

  tabsList.addEventListener("pointerdown", () => {
    if (window.innerWidth < 768) {
      activeDrag = true;
    }
  });
  tabsList.addEventListener("pointerup", () => {
    if (window.innerWidth < 768) {
      tabsList.style.scrollBehavior = "smooth";
      activeDrag = false;
    }
  });

  return (
    <div
      className={
        "transition-all duration-1000 arrow-" +
        index +
        " justify-center absolute z-20" +
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
