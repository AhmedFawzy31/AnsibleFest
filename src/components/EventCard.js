import { useEffect, useContext } from "react";
import EventTopics from "./EventTopics";
import EventTags from "./EventTags";
import { useSpring, animated } from "@react-spring/web";
import { FilterContext } from "./filter/FilterContext";

const EventCard = ({ event, date }) => {
  const { criteria } = useContext(FilterContext);
  const [springs, api] = useSpring(() => ({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
  }));
  useEffect(() => {
    api.start({
      from: { opacity: 0, transform: "scale(0.8)" },
      to: { opacity: 1, transform: "scale(1)" },
    });
  }, [criteria]);
  return (
    <animated.div
      style={springs}
      className="flex flex-col bg-darkGray py-[25px] px-[20px] mb-[35px] md:mb-0"
    >
      <EventTags
        tags={{ type: event.type, proficiency: event.proficiency }}
      ></EventTags>
      <h2 className="md:min-h-[85px] mt-[20px] mb-[30px] text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[24px] lg:min-h-[7rem] lg:mt-[25px] lg:leading-relaxed">
        {event.title}
      </h2>
      <p
        className="text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px]
      min-h-2 md:min-h-4 lg:min-h-[4rem]"
      >
        {`Room ${event.room} | ${date} | ${event.startTime} - ${event.endTime} ${event.timeZone}`}
      </p>
      <EventTopics topics={event.topics}></EventTopics>
      <div className="mt-[50px]">
        <a
          className="mt-[50px] font-extrabold text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[20px] xl:text-[26px] underline"
          href="https://events.experiences.redhat.com/widget/redhat/sum23/SessionCatalog2023/session/1673034155591001BQqj"
          target="#blank"
        >
          Learn more
        </a>
      </div>
    </animated.div>
  );
};

export default EventCard;
