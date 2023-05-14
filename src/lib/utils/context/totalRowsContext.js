import React, { useState } from "react";

export const totalRowsContext = React.createContext();

export const ContextTotalRowsContextProvider = ({ children }) => {
  const [totalRows, setTotalRows] = useState(10);
  return (
    <totalRowsContext.Provider
      value={{
        totalRows,
        setTotalRows,
      }}
    >
      {children}
    </totalRowsContext.Provider>
  );
};
