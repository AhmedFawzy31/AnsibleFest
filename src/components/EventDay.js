import React from "react";
import EventCard from "./EventCard";

const EventDay = ({ day, index }) => {
  const date = new Date(day.date);
  const options = { weekday: "long", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleString("en-US", options);
  return (
    <>
      <h1 className="text-center mb-[35px] font-bold text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[24px] leading-normal md:mt-[35px] lg:text-left">
        <div>DAY {index[day.date]}</div>
        {formattedDate}
      </h1>
      <div className="md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-7 lg:pb-8">
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
