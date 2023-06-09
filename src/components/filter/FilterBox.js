import { useContext } from "react";
import { HomeContext } from "../../context/HomeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const FilterBox = () => {
  const { criteria, setCriteria } = useContext(HomeContext);
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
    <div className="text-[12px] xs:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[18px]">
      {tags.length !== 0 && <h3 className="mb-2">FIltering by:</h3>}
      {tags.length !== 0 && (
        <div className="flex flex-wrap gap-3 pb-[35px]">
          {tags.map((tag) => (
            <div
              onClick={() => handleRemoveFilter(tag)}
              className="flex justify-center items-center px-3 py-1 border-2 border-teal rounded-[75px] cursor-pointer transition-all duration-300 ease-in-out hover:opacity-70"
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
    </div>
  );
};

export default FilterBox;
