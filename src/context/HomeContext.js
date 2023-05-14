import React, { createContext, useState } from "react";

export const HomeContext = createContext();

export const HomeContextProvider = ({ children }) => {
  const defaultSelect = {
    type: "Type",
    proficiency: "Proficiency",
    topic: "Topic",
  };
  const [criteria, setCriteria] = useState(defaultSelect);
  const [isDefault, setIsDefault] = useState(true);
  const [days, setDays] = useState({});
  const [curPage, setCurPage] = useState(1);
  const [lastPage, setLastPage] = useState(null);
  return (
    <HomeContext.Provider
      value={{
        criteria,
        setCriteria,
        isDefault,
        setIsDefault,
        defaultSelect,
        days,
        setDays,
        curPage,
        setCurPage,
        lastPage,
        setLastPage,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
