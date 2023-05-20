import React, { useState } from "react";
export const currentPageContext = /*#__PURE__*/React.createContext();
export const ContextCurrentPageContextProvider = ({
  children
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  return /*#__PURE__*/React.createElement(currentPageContext.Provider, {
    value: {
      currentPage,
      setCurrentPage
    }
  }, children);
};