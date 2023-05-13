import React, { useState } from "react";

export const currentPageContext = React.createContext();

export const ContextCurrentPageContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <currentPageContext.Provider
      value={{
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </currentPageContext.Provider>
  );
};
