import { useContext } from "react";
import { FilterContext } from "./FilterContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const FilterBox = () => {
  const { criteria, setCriteria } = useContext(FilterContext);
  const handleRemoveFilter = (type) => {
    setCriteria((prevCriteria) => {
      return {
        ...prevCriteria,
        [type]: type.charAt(0).toUpperCase() + type.slice(1),
      };
    });
  };
  let keys = Object.keys(criteria);
  let tags = keys.filter((key) => key !== criteria[key].toLowerCase());
  return (
    <>
      {tags.length !== 0 && <h3 className="mb-2">FIltering by:</h3>}
      {tags.length !== 0 && (
        <div className="text-[12px] flex flex-wrap gap-3 mb-[35px]">
          {tags.map((tag) => (
            <div
              onClick={() => handleRemoveFilter(tag)}
              className="flex justify-center items-center px-3 py-1 border-2 border-teal rounded-[75px]"
              key={tag}
            >
              <div className="mr-2 font-bold">
                <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
              </div>
              {criteria[tag]}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FilterBox;
