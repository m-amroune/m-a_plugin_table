import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import Pagination from "./Pagination";
const Table = ({
  headColumns,
  employeesList,
  rows,
  rowsPerPage
}) => {
  const [currentRows, setCurrentRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState();
  const [sortAscending, setSortAscending] = useState(true);
  useEffect(() => {
    setCurrentRows([...rows]);
  }, [rows]);
  const lastRow = currentPage * rowsPerPage;
  const firstRow = lastRow - rowsPerPage;
  const totalEmployees = currentRows.slice(firstRow, lastRow);
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
    setCurrentRows(tempSortedEmployeesList);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", {
    className: style.table
  }, /*#__PURE__*/React.createElement("thead", {
    className: style.headColumns
  }, /*#__PURE__*/React.createElement("tr", null, headColumns ? headColumns.map(({
    title,
    value
  }, index) => /*#__PURE__*/React.createElement("th", {
    onClick: () => sortByColumn(value),
    key: `${index}-${title}`
  }, title, /*#__PURE__*/React.createElement("div", {
    className: style["headColumns-cell"]
  }, /*#__PURE__*/React.createElement(BiUpArrow, null), " ", /*#__PURE__*/React.createElement(BiDownArrow, null)))) : [])), /*#__PURE__*/React.createElement("tbody", null, totalEmployees.slice(0, rowsPerPage).map((row, index) => {
    return /*#__PURE__*/React.createElement("tr", {
      className: style.columns,
      key: index
    }, /*#__PURE__*/React.createElement("td", null, " ", row.firstName, " "), /*#__PURE__*/React.createElement("td", null, " ", row.lastName, " "), /*#__PURE__*/React.createElement("td", null, " ", row.startDate, " "), /*#__PURE__*/React.createElement("td", null, " ", row.department, " "), /*#__PURE__*/React.createElement("td", null, " ", row.dateOFBirth, " "), /*#__PURE__*/React.createElement("td", null, " ", row.street, " "), /*#__PURE__*/React.createElement("td", null, " ", row.city, " "), /*#__PURE__*/React.createElement("td", null, " ", row.state, " "), /*#__PURE__*/React.createElement("td", null, " ", row.zipCode, " "));
  }))), /*#__PURE__*/React.createElement("div", {
    className: style["pagination-entries"]
  }, /*#__PURE__*/React.createElement("p", null, "Showing ", firstRow + 1, " to ", lastRow, " entries of ", rows.length, " entries")), /*#__PURE__*/React.createElement(Pagination, {
    rows: rows.length,
    rowsPerPage: rowsPerPage,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage
  }));
};
export default Table;