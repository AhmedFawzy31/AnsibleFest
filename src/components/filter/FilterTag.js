import React from "react";
import { FilterContext } from "./FilterContext";
import { useContext } from "react";

const FilterTag = ({ tag, type }) => {
  const { isDefault, setIsDefault, setCriteria } = useContext(FilterContext);
  const handleTagClick = () => {
    if (isDefault) setIsDefault(false);
    setCriteria((prevCriteria) => {
      return {
        ...prevCriteria,
        [type]: tag,
      };
    });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  let render;
  if (type === "proficiency") {
    let proficiencyColor = "";
    if (tag === "Advanced") proficiencyColor = "bg-clay";
    else if (tag === "Intermediate") proficiencyColor = "bg-yellow";
    else if (tag === "Business") proficiencyColor = "bg-purple";
    else proficiencyColor = "bg-green";
    render = (
      <div
        onClick={handleTagClick}
        className={`${proficiencyColor} text-black py-1 px-3 rounded-[75px] ml-[15px] font-semibold`}
      >
        {tag}
      </div>
    );
  } else if (type === "type") {
    render = (
      <div
        onClick={handleTagClick}
        className="uppercase bg-teal text-black py-1 px-3 font-bold"
      >
        {tag}
      </div>
    );
  } else if (type === "topic") {
    render = (
      <div onClick={handleTagClick} className="py-1 px-3 border border-teal">
        {tag}
      </div>
    );
  }
  return render;
};

export default FilterTag;
