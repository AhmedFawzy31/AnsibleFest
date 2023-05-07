import React, { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const defaultSelect = {
    type: "Type",
    proficiency: "Proficiency",
    topic: "Topic",
  };
  const [criteria, setCriteria] = useState(defaultSelect);
  const [isDefault, setIsDefault] = useState(true);
  return (
    <FilterContext.Provider
      value={{ criteria, setCriteria, isDefault, setIsDefault, defaultSelect }}
    >
      {children}
    </FilterContext.Provider>
  );
};
