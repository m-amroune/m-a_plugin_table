import React, { useState } from "react";
export const rowsPerPageContext = /*#__PURE__*/React.createContext();
export const ContextRowsPerPageContextProvider = ({
  children
}) => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  return /*#__PURE__*/React.createElement(rowsPerPageContext.Provider, {
    value: {
      rowsPerPage,
      setRowsPerPage
    }
  }, children);
};