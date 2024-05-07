// Context.jsx
//import React, { createContext, useContext, useState } from 'react';
import { createContext,useContext, useState } from "react";
const ClicksContext = createContext();

export const useClicksContext = () => useContext(ClicksContext);

export const ClicksProvider = ({ children }) => {
  const [totalClicks, setTotalClicks] = useState(0);

  const incrementClicks = () => {
    setTotalClicks(prevClicks => prevClicks + 1);
  };

  return (
    <ClicksContext.Provider value={{ totalClicks, incrementClicks }}>
      {children}
    </ClicksContext.Provider>
  );
};