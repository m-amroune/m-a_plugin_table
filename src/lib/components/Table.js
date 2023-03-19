import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import Pagination from "./Pagination";

const Table = ({ headColumns, employeesList, rows, rowsPerPage }) => {
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

  const sortByColumn = (headColumn) => {
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

  return (
    <div>
      {
        <table className={style.table}>
          <thead className={style.headColumns}>
            <tr>
              {headColumns
                ? headColumns.map(({ title, value }, index) => (
                    <th
                      onClick={() => sortByColumn(value)}
                      key={`${index}-${title}`}
                    >
                      {title}
                      <div className={style["headColumns-cell"]}>
                        <BiUpArrow /> <BiDownArrow />
                      </div>
                    </th>
                  ))
                : []}
            </tr>
          </thead>
          <tbody>
            {totalEmployees.slice(0, rowsPerPage).map((row, index) => {
              return (
                <tr className={style.columns} key={index}>
                  <td> {row.firstName} </td>
                  <td> {row.lastName} </td>
                  <td> {row.startDate} </td>
                  <td> {row.department} </td>
                  <td> {row.dateOFBirth} </td>
                  <td> {row.street} </td>
                  <td> {row.city} </td>
                  <td> {row.state} </td>
                  <td> {row.zipCode} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      }
      <div className={style["pagination-entries"]}>
        <p>
          Showing {firstRow + 1} to {lastRow} entries of {rows.length} entries
        </p>
      </div>
      <Pagination
        rows={rows.length}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Table;
