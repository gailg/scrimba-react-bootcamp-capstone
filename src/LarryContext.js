import React, { useState } from "react";
const LarryContext = React.createContext();

const LarryContextProvider = ({ children }) => {
  const [larry, setLarry] = useState("");

  return (
    <LarryContext.Provider value={{ larry }}>{children}</LarryContext.Provider>
  );
};

export { LarryContextProvider, LarryContext };
