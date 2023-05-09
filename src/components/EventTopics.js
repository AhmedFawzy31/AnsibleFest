import React from "react";
import FilterTag from "./filter/FilterTag";

const EventTopics = ({ topics }) => {
  return (
    <div className="md:flex-grow">
      <h3 className="uppercase font-santralBook mt-[30px] mb-[25px] text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px]">
        topics
      </h3>
      <div className="flex flex-wrap gap-2 md:gap-3 text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px]">
        {topics.map((topic) => {
          return <FilterTag key={topic} tag={topic} type={"topic"}></FilterTag>;
        })}
      </div>
    </div>
  );
};

export default EventTopics;
