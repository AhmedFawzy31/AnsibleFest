import React from "react";
import FilterTag from "./filter/FilterTag";

const EventTags = ({ tags }) => {
  return (
    <div className="flex text-[12px]">
      <FilterTag tag={tags.type} type={"type"}></FilterTag>
      <FilterTag tag={tags.proficiency} type={"proficiency"}></FilterTag>
    </div>
  );
};

export default EventTags;
