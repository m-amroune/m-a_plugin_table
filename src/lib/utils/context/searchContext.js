import React, { useState } from "react";

export const searchContext = React.createContext();

export const ContextSearchContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <searchContext.Provider
      value={{
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </searchContext.Provider>
  );
};
