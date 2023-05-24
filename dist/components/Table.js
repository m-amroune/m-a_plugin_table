import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import Pagination from "./Pagination";
import PropTypes from "prop-types";
const Table = ({
  headColumns,
  rows,
  rowsPerPage,
  setRowsPerPage
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState(rows);
  const [sortAscending, setSortAscending] = useState(true);
  const [lastRow, setLastRow] = useState("");
  const [firstRow, setFirstRow] = useState("");
  const [totalRows, setTotalRows] = useState(rows);
  useEffect(() => {
    setLastRow(currentPage * rowsPerPage);
    setFirstRow(lastRow - rowsPerPage);
    setTotalRows(rows.slice(firstRow, lastRow));
  }, [currentPage, firstRow, lastRow, rowsPerPage, rows]);
  const sortByColumn = headColumn => {
    let tempSortedEmployeesList = [...rows];
    let newSortDirection = !sortAscending;
    if (headColumn !== sortColumn) {
      newSortDirection = true;
      setSortColumn(headColumn);
    }
    if (newSortDirection) {
      // ascending order
      tempSortedEmployeesList.sort((a, b) => {
        const x = a[headColumn];
        const y = b[headColumn];
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
    }
    setSortAscending(newSortDirection);
    setTotalRows(tempSortedEmployeesList);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", {
    className: style.table
  }, /*#__PURE__*/React.createElement("thead", {
    className: style.headColumns
  }, /*#__PURE__*/React.createElement("tr", null, headColumns.map(({
    title,
    value
  }, index) => /*#__PURE__*/React.createElement("th", {
    onClick: () => sortByColumn(value),
    key: `${index}-${title}`
  }, title, /*#__PURE__*/React.createElement("div", {
    className: style["headColumns-cell"]
  }, /*#__PURE__*/React.createElement(BiUpArrow, null), " ", /*#__PURE__*/React.createElement(BiDownArrow, null)))))), /*#__PURE__*/React.createElement("tbody", null, rows ? totalRows.slice(0, rowsPerPage).map((row, index) => {
    return /*#__PURE__*/React.createElement("tr", {
      className: style.columns,
      key: index
    }, /*#__PURE__*/React.createElement("td", null, " ", row.firstName, " "), /*#__PURE__*/React.createElement("td", null, " ", row.lastName, " "), /*#__PURE__*/React.createElement("td", null, " ", row.startDate, " "), /*#__PURE__*/React.createElement("td", null, " ", row.department, " "), /*#__PURE__*/React.createElement("td", null, " ", row.dateOFBirth, " "), /*#__PURE__*/React.createElement("td", null, " ", row.street, " "), /*#__PURE__*/React.createElement("td", null, " ", row.city, " "), /*#__PURE__*/React.createElement("td", null, " ", row.state, " "), /*#__PURE__*/React.createElement("td", null, " ", row.zipCode, " "));
  }) : [])), /*#__PURE__*/React.createElement("div", {
    className: style["pagination-entries"]
  }, /*#__PURE__*/React.createElement("p", null, "Showing ", firstRow + 1, " to ", lastRow, " entries of ", rows.length, " entries"), /*#__PURE__*/React.createElement(Pagination, {
    rows: rows.length,
    rowsPerPage: rowsPerPage,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage
  })));
};
Table.propTypes = {
  headColumns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  rowsPerPage: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired])
};
export default Table;