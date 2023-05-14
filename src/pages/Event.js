import EventPageTag from "../components/EventPageTag";
import { useQuery } from "@tanstack/react-query";
import { MoonLoader } from "react-spinners";
import { db } from "../firebase-config.js";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import calendar from "../assets/images/calendar.svg";
import { formatDate } from "../helpers/helpers";
import { convertTo12Hour } from "../helpers/helpers";
const Event = () => {
  //get id from url with react router
  const { id } = useParams();
  const docRef = doc(db, "events", id);
  const { isLoading, isSuccess, data } = useQuery({
    queryKey: ["event", id],
    queryFn: async () => {
      const response = await getDoc(docRef);
      return response.data();
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: () => {},
  });
  return (
    <div className="flex-grow mt-[55px] px-[25px] text-light">
      <div className="container">
        {isLoading && (
          <MoonLoader
            cssOverride={{
              marginTop: "100px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            color="#5BBEC0"
            speedMultiplier={1}
          />
        )}
        {isSuccess && (
          <>
            <div className="flex gap-[20px]">
              <EventPageTag tag={data.type} type={"type"}></EventPageTag>
              <EventPageTag
                tag={data.proficiency}
                type={"proficiency"}
              ></EventPageTag>
            </div>
            <h1 className="text-[35px] lg:text-[45px] mt-[35px]">
              {data.title}
            </h1>
            <div className="mt-[60px] text-[20px] leading-[1.25] font-semibold">
              <div>{`Room ${data.room}`}</div>
              <div>{formatDate(data.date)}</div>
              <div>{`${convertTo12Hour(data.startTime)} - ${data.endTime} ${
                data.timeZone
              }`}</div>
            </div>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] mt-[80px] mb-[60px]">
              {data.description}
            </p>
            <a
              className="flex items-center text-[#E4F339] font-extrabold mb-[60px]"
              target="#blank"
              href={data.link}
            >
              <img className="mr-3" alt="calendar" src={calendar}></img>
              <span>Add to schedule</span>
            </a>
            <div>
              <h3 className="uppercase font-santralBook mb-[14px] text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px]">
                topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.topics.map((topic) => (
                  <div
                    key={topic}
                    className="filterTag hover:bg-teal hover:text-black border border-teal"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Event;
