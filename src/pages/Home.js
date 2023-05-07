import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { sortEvents, groupByDay } from "../helpers/helpers";
import EventDay from "../components/EventDay";
import { useState } from "react";
import Filter from "../components/filter/Filter";
import { FilterContextProvider } from "../components/filter/FilterContext";
import { MoonLoader } from "react-spinners";

const Home = () => {
  const [events, setEvents] = useState(null);
  const [days, setDays] = useState(null);
  const { isLoading, isSuccess, data } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const response = await axios.get(
        "https://red-hat-b3c3c-default-rtdb.firebaseio.com/events.json"
      );
      return response.data;
    },
    onSuccess: (data) => {
      const grouped = groupByDay(sortEvents(data));
      let days = {};
      grouped.forEach((group, index) => {
        days[group.date] = index + 1;
      });
      setDays(days);
      setEvents(data);
    },
    onError: () => {},
  });
  return (
    <FilterContextProvider>
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
          {isSuccess && events && days && (
            <div>
              <Filter data={data} setEvents={setEvents}></Filter>
              {groupByDay(sortEvents(events)).map((day, index) => {
                return <EventDay key={index} day={day} index={days}></EventDay>;
              })}
              {Object.keys(events).length === 0 && <h2>No events found.</h2>}
            </div>
          )}
        </div>
      </div>
    </FilterContextProvider>
  );
};

export default Home;
