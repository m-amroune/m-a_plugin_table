import React, { useState } from "react";
export const totalRowsContext = /*#__PURE__*/React.createContext();
export const ContextTotalRowsContextProvider = ({
  children
}) => {
  const [totalRows, setTotalRows] = useState(10);
  return /*#__PURE__*/React.createElement(totalRowsContext.Provider, {
    value: {
      totalRows,
      setTotalRows
    }
  }, children);
};