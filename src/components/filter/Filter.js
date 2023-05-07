import { useContext } from "react";
import { filterEvents, extractTopics, extract } from "../../helpers/helpers";
import { useState, useEffect } from "react";
import { FilterContext } from "./FilterContext";
import FilterBox from "./FilterBox";

const Filter = ({ data, setEvents }) => {
  const { criteria, setCriteria, defaultSelect, isDefault, setIsDefault } =
    useContext(FilterContext);
  const topics = extractTopics(data);
  const profs = extract(data, "proficiency");
  const types = extract(data, "type");
  const resetFilter = () => {
    setEvents(data);
    setCriteria(defaultSelect);
    setIsDefault(true);
  };
  const onChange = (event, key) => {
    if (isDefault) setIsDefault(false);
    const value = event.target.value;
    setCriteria((prevCriteria) => ({
      ...prevCriteria,
      [key]: value !== "" ? value : undefined,
    }));
  };
  useEffect(() => {
    if (criteria && !isDefault) {
      const filtered = filterEvents(data, criteria);
      setEvents(filtered);
    }
  }, [criteria]);
  return (
    <>
      <div className="flex justify-between">
        <h2 className="mb-4">Filter events by</h2>
        <div
          onClick={resetFilter}
          className="text-teal cursor-pointer transition-all duration-300 ease-in-out hover:opacity-70"
        >
          Reset filter
        </div>
      </div>
      <form className="flex flex-col sm:grid sm:grid-cols-3 gap-3 pb-[35px]">
        <div className="border border-light">
          <select
            value={criteria.type}
            className="select"
            onChange={(event) => onChange(event, "type")}
          >
            <option disabled>Type</option>
            {types.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="border border-light">
          <select
            value={criteria.proficiency}
            className="select"
            onChange={(event) => onChange(event, "proficiency")}
          >
            <option disabled>Proficiency</option>
            {profs.map((prof) => (
              <option key={prof}>{prof}</option>
            ))}
          </select>
        </div>
        <div className="border border-light">
          <select
            value={criteria.topic}
            className="select"
            onChange={(event) => onChange(event, "topic")}
          >
            <option disabled>Topic</option>
            {topics.map((topic) => (
              <option key={topic}>{topic}</option>
            ))}
          </select>
        </div>
      </form>
      <FilterBox></FilterBox>
    </>
  );
};

export default Filter;
