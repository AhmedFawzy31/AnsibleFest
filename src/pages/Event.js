import EventPageTag from "../components/EventPageTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@tanstack/react-query";
import { MoonLoader } from "react-spinners";
import { db } from "../firebase-config.js";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
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
              <div>Room 207</div>
              <div>Tuesday, May 23</div>
              <div>11:00 AM - 12:30 PM EDT</div>
            </div>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] my-[80px]">
              {data.description}
            </p>
            <div className="flex items-center justify-between gap-8 ">
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
              <a href={data.link} target="#blank">
                <FontAwesomeIcon
                  color="#E4F339"
                  size="3x"
                  icon={faArrowRightLong}
                ></FontAwesomeIcon>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Event;
