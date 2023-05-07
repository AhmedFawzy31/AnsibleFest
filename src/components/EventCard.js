import React from "react";
import EventTopics from "./EventTopics";
import EventTags from "./EventTags";

const EventCard = ({ event, date }) => {
  return (
    <div className="flex flex-col bg-darkGray py-[25px] px-[20px] mb-[35px] md:mb-0">
      <EventTags
        tags={{ type: event.type, proficiency: event.proficiency }}
      ></EventTags>
      <h2 className="md:min-h-[85px] mt-[20px] mb-[30px] text-[18px]">
        {event.title}
      </h2>
      <p className="text-[12px]">
        {`Room ${event.room} | ${date} | ${event.startTime} - ${event.endTime} ${event.timeZone}`}
      </p>
      <EventTopics topics={event.topics}></EventTopics>
      <div className="mt-[50px]">
        <a
          className="mt-[50px] font-extrabold text-[16px] underline"
          href="https://events.experiences.redhat.com/widget/redhat/sum23/SessionCatalog2023/session/1673034155591001BQqj"
          target="#blank"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default EventCard;
