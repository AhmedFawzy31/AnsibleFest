import React from "react";
import EventCard from "./EventCard";
import { formatDate } from "../helpers/helpers";

const EventDay = ({ day, index }) => {
  const formattedDate = formatDate(day.date);
  return (
    <>
      <h1 className="text-center mb-[35px] font-bold text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] leading-normal md:mt-[35px] lg:text-left">
        <div>DAY {index[day.date]}</div>
        {formattedDate}
      </h1>
      <div className="md:grid lg:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-7 xl:pb-8">
        {day.data.map((event, index) => {
          return (
            <EventCard
              event={event}
              date={formattedDate}
              key={index}
            ></EventCard>
          );
        })}
      </div>
    </>
  );
};

export default EventDay;
