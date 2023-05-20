import React, { useState } from "react";
export const searchContext = /*#__PURE__*/React.createContext();
export const ContextSearchContextProvider = ({
  children
}) => {
  const [searchValue, setSearchValue] = useState("");
  return /*#__PURE__*/React.createElement(searchContext.Provider, {
    value: {
      searchValue,
      setSearchValue
    }
  }, children);
};