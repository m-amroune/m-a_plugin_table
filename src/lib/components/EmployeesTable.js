import React, { useContext } from "react";
import Table from "./Table";
import style from "./style.module.css";
import { searchContext } from "../utils/context/searchContext";
import { rowsPerPageContext } from "../utils/context/rowsPerPageContext";

const EmployeesTable = ({ headColumns, rows }) => {
  const { searchValue, setSearchValue } = useContext(searchContext);
  const { rowsPerPage, setRowsPerPage } = useContext(rowsPerPageContext);

  const search = () => {
    return rows
      ? rows.filter(
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
        )
      : [];
  };
  return (
    <div>
      <div className={style["entries-searchBar"]}>
        <div className={style["select-entries"]}>
          <label>Show </label>
          <select onChange={(e) => setRowsPerPage(e.target.value)}>
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          <p className={style.paragraphEntries}>entries</p>
        </div>
        <div className={style["search-label"]}>
          <label>Search : </label>
          <input
            placeholder="Search"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <div>
        <Table
          rowsPerPage={rowsPerPage}
          headColumns={headColumns}
          rows={search(rows)}
        />
      </div>
    </div>
  );
};

export default EmployeesTable;
