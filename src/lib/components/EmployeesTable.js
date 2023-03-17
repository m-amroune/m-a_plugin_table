import React, { useState } from "react";
import Table from "./Table";
import style from "./style.module.css";
import { employeesList } from "../example/data";

const EmployeesTable = ({ headColumns, rows }) => {
  const [searchValue, setSearchValue] = useState([""]);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const search = () => {
    return rows.filter(
      (employee) =>
        employee.firstName.toLowerCase().includes(searchValue) ||
        employee.lastName.toLowerCase().includes(searchValue) ||
        employee.startDate.includes(searchValue) ||
        employee.department.toLowerCase().includes(searchValue) ||
        employee.dateOFBirth.includes(searchValue) ||
        employee.street.toLowerCase().includes(searchValue) ||
        employee.city.toLowerCase().includes(searchValue) ||
        employee.state.toLowerCase().includes(searchValue) ||
        employee.zipCode.includes(searchValue)
    );
  };
  return (
    <div>
      <div className={style["entries-searchBar"]}>
        <div>
          <label>Show </label>
          <select onChange={(e) => setRowsPerPage(e.target.value)}>
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          <p className={style.paragraphEntries}>entries</p>
        </div>
        <div>
          <label>Search : </label>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <div>
        <Table
          rowsPerPage={rowsPerPage}
          headColumns={headColumns}
          rows={search(rows)}
          employeesList={employeesList}
        />
      </div>
    </div>
  );
};

export default EmployeesTable;
