import React from "react";
import FilterTag from "./filter/FilterTag";

const EventTopics = ({ topics }) => {
  return (
    <div className="md:flex-grow">
      <h3 className="uppercase font-santralBook mt-[30px] mb-[25px] text-[14px]">
        topics
      </h3>
      <div className="flex flex-wrap gap-2 text-[12px]">
        {Object.keys(topics).map((topic) => {
          return <FilterTag key={topic} tag={topic} type={"topic"}></FilterTag>;
        })}
      </div>
    </div>
  );
};

export default EventTopics;
