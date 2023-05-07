import React from "react";
import EventCard from "./EventCard";

const EventDay = ({ day, index }) => {
  const date = new Date(day.date);
  const options = { weekday: "long", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleString("en-US", options);
  return (
    <>
      <h1 className="text-center mb-[35px] font-bold text-[18px] leading-[23px]">
        <div>DAY {index[day.date]}</div>
        {formattedDate}
      </h1>
      {day.data.map((event, index) => {
        return (
          <EventCard event={event} date={formattedDate} key={index}></EventCard>
        );
      })}
    </>
  );
};

export default EventDay;
