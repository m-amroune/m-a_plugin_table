import React, { useState } from "react";

export const rowsPerPageContext = React.createContext();

export const ContextRowsPerPageContextProvider = ({ children }) => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  return (
    <rowsPerPageContext.Provider
      value={{
        rowsPerPage,
        setRowsPerPage,
      }}
    >
      {children}
    </rowsPerPageContext.Provider>
  );
};
