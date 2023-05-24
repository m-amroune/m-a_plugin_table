import React from "react";
import style from "./style.module.css";
import PropTypes from "prop-types";
const Pagination = ({
  rows,
  rowsPerPage,
  currentPage,
  setCurrentPage
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(rows / rowsPerPage); i++) {
    pages.push(i);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: style.pagination
  }, pages.map((page, index) => {
    return /*#__PURE__*/React.createElement("button", {
      key: index,
      onClick: () => setCurrentPage(page),
      className: page === currentPage ? style["active"] : ""
    }, page);
  }));
};
Pagination.propTypes = {
  rows: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired
};
export default Pagination;