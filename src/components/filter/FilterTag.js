import React from "react";
import { HomeContext } from "../../context/HomeContext";
import { useContext } from "react";
const FilterTag = ({ tag, type }) => {
  const { isDefault, setIsDefault, setCriteria } = useContext(HomeContext);
  const handleTagClick = () => {
    if (isDefault) setIsDefault(false);
    setCriteria((prevCriteria) => {
      return {
        ...prevCriteria,
        [type]: tag,
      };
    });
  };
  let classes;
  if (type === "proficiency") {
    let proficiencyColor = "";
    if (tag === "Advanced") proficiencyColor = "bg-clay";
    else if (tag === "Intermediate") proficiencyColor = "bg-yellow";
    else if (tag === "Business") proficiencyColor = "bg-purple";
    else proficiencyColor = "bg-green";
    classes = `${proficiencyColor} filterTag  text-black rounded-[75px] ml-[15px] font-semibold`;
  } else if (type === "type") {
    classes = "filterTag  uppercase bg-teal text-black font-bold";
  } else if (type === "topic") {
    classes = "filterTag hover:bg-teal hover:text-black border border-teal";
  }
  return (
    <div className={classes} onClick={handleTagClick}>
      {tag}
    </div>
  );
};

export default FilterTag;
