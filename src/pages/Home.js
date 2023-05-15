import { useQuery } from "@tanstack/react-query";
import { groupByDay } from "../helpers/helpers";
import EventDay from "../components/EventDay";
import { useState } from "react";
import Filter from "../components/filter/Filter";
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";
import { MoonLoader } from "react-spinners";
import { db } from "../firebase-config.js";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const eventsRef = collection(db, "events");
  const [events, setEvents] = useState(null);
  const { days, setDays, curPage, setCurPage, lastPage, setLastPage } =
    useContext(HomeContext);
  const [queryParameter, setQueryParameter] = useState(
    query(eventsRef, orderBy("date"), orderBy("startTime"), limit(50))
  );

  const { isLoading, isSuccess, data } = useQuery({
    queryKey: ["events", curPage],
    queryFn: async () => {
      const response = await getDocs(queryParameter);
      const docs = response.docs.map((doc) => {
        let ret = doc.data();
        ret["id"] = doc.id;
        return ret;
      });
      const grouped = groupByDay(docs);
      grouped.forEach((group) => {
        if (!(group.date in days))
          days[group.date] = Object.keys(days).length + 1;
      });
      setDays(days);
      return {
        data: docs,
        last: response.docs[docs.length - 1],
        first: response.docs[0],
        size: response.size,
      };
    },
    onSuccess: () => {},
    onError: () => {},
  });

  const handleNextPage = () => {
    setQueryParameter(
      query(
        eventsRef,
        orderBy("date"),
        orderBy("startTime"),
        startAfter(data.last),
        limit(50)
      )
    );
    setCurPage((prevPage) => prevPage + 1);
  };
  const handlePreviousPage = () => {
    if (data.size === 0) setLastPage(curPage - 1);
    setCurPage((prevPage) => prevPage - 1);
  };
  return (
    <>
      <div className="text-light flex-grow">
        <div className="container pt-[45px] px-[25px]">
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
            <div>
              <Filter data={data.data} setEvents={setEvents}></Filter>
              {groupByDay(events ? events : data.data).map((day, index) => {
                return <EventDay key={index} day={day} index={days}></EventDay>;
              })}
              {events && events.length === 0 && (
                <h2 className="mb-5">No events found.</h2>
              )}
              {data.size === 0 && curPage > 1 && (
                <h2 className="mb-5">You've reached the end.</h2>
              )}
            </div>
          )}
        </div>
      </div>
      {isSuccess && (
        <div className="flex justify-center">
          <ul className="flex font-bold gap-[50px] text-light text-[20px] px-[30px] py-[15px] rounded-[75px] bg-[rgba(91,190,192,0.1)]">
            <li>
              <button
                className="paginationItem paginationCursor"
                disabled={curPage === 1}
                onClick={handlePreviousPage}
              >
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
              </button>
            </li>
            <li className="paginationItem bg-teal text-black rounded-full">
              {curPage}
            </li>
            <li>
              <button
                className="paginationItem paginationCursor"
                onClick={handleNextPage}
                disabled={data.size === 0 || curPage === lastPage}
              >
                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Home;
