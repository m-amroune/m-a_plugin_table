import { useEffect, useState } from "react";
import style from "./style.module.css";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

const Table = ({ headColumns, rows, rowsPerPage }) => {
  const [currentListEmployees, setCurrentListEmployees] = useState([...rows]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setCurrentListEmployees(rows);
  }, [rows]);

  const onPrevious = () => {
    setPage(page - 1 > -1 ? page - 1 : page);
  };

  const onNext = () => {
    setPage(page + 1 < rows.length / rowsPerPage ? page + 1 : page);
  };
  return (
    <div>
      <table className={style.table}>
        <thead className={style.headColumns}>
          <tr>
            {headColumns.map(({ title }, index) => (
              <th key={`${index}-${title}`}>
                {" "}
                {title} <BiUpArrow /> <BiDownArrow />{" "}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows
            .slice(rowsPerPage * page, rowsPerPage * page + rowsPerPage)
            .map((row, index) => {
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
      <div>
        <button className={style.button} onClick={onPrevious}>
          Previous
        </button>
        <label className={style["page-number"]}>{page + 1}</label>
        <button className={style.button} onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
