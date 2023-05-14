import React, { useState, useEffect, useContext } from "react";
import style from "./style.module.css";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import Pagination from "./Pagination";
import { currentPageContext } from "../utils/context/currentPageContext";

const Table = ({ headColumns, rows, rowsPerPage }) => {
  const { currentPage, setCurrentPage } = useContext(currentPageContext);
  const [currentRows, setCurrentRows] = useState(rows);
  const [sortColumn, setSortColumn] = useState(rows);
  const [sortAscending, setSortAscending] = useState(true);
  const [lastRow, setLastRow] = useState("");
  const [firstRow, setFirstRow] = useState("");
  const [totalRows, setTotalRows] = useState(rows);

  useEffect(() => {
    setCurrentRows(currentRows);
    setLastRow(currentPage * rowsPerPage);
    setFirstRow(lastRow - rowsPerPage);
    setTotalRows(rows.slice(firstRow, lastRow));
    console.log(rows);
  }, [currentRows, currentPage, firstRow, lastRow, rowsPerPage, rows]);

  //  let lastRow = currentPage * rowsPerPage;
  // let firstRow = lastRow - rowsPerPage;
  // let totalRows = currentRows.slice(firstRow, lastRow);

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
    setTotalRows(tempSortedEmployeesList);
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
            {totalRows.map((row, index) => {
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
        <Pagination
          rows={rows.length}
          rowsPerPage={rowsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Table;
