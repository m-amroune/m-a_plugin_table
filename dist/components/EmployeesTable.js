import React, { useState } from "react";
import Table from "./Table";
import style from "./style.module.css";
import { employeesList } from "../example/data";
const EmployeesTable = ({
  headColumns,
  rows
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const search = () => {
    return rows ? rows.filter(employee => employee.firstName.toLowerCase().includes(searchValue) || employee.lastName.toLowerCase().includes(searchValue) || employee.startDate.includes(searchValue) || employee.department.toLowerCase().includes(searchValue) || employee.dateOFBirth.includes(searchValue) || employee.street.toLowerCase().includes(searchValue) || employee.city.toLowerCase().includes(searchValue) || employee.state.toLowerCase().includes(searchValue) || employee.zipCode.includes(searchValue)) : [];
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: style["entries-searchBar"]
  }, /*#__PURE__*/React.createElement("div", {
    className: style["select-entries"]
  }, /*#__PURE__*/React.createElement("label", null, "Show "), /*#__PURE__*/React.createElement("select", {
    onChange: e => setRowsPerPage(e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "10"), /*#__PURE__*/React.createElement("option", null, "25"), /*#__PURE__*/React.createElement("option", null, "50"), /*#__PURE__*/React.createElement("option", null, "100")), /*#__PURE__*/React.createElement("p", {
    className: style.paragraphEntries
  }, "entries")), /*#__PURE__*/React.createElement("div", {
    className: style["search-label"]
  }, /*#__PURE__*/React.createElement("label", null, "Search : "), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search",
    type: "text",
    value: searchValue,
    onChange: e => setSearchValue(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Table, {
    rowsPerPage: rowsPerPage,
    headColumns: headColumns,
    rows: search(rows),
    employeesList: employeesList
  })));
};
export default EmployeesTable;