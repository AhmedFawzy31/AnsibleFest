import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 900) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`text-center fixed flex flex-col items-center bottom-6 right-6 transition-all duration-300 ease-in-out ${
        !isVisible ? "invisible opacity-0" : "visible opacity-1"
      }`}
    >
      <button
        onClick={scrollUp}
        className="bg-[#d9d9d999] w-[47px] h-[47px] rounded-full flex justify-center items-center mb-2"
      >
        <FontAwesomeIcon
          className="text-teal font-bold text-[25px]"
          icon={faArrowUpLong}
        ></FontAwesomeIcon>
      </button>
      <span className="text-light">Return to top</span>
    </div>
  );
};

export default ScrollToTopButton;
