import React from "react";
import style from "./style.module.css";

const Table = ({ headColumns, rows, rowsPerPage }) => {
  //   const [currentListEmployees, setCurrentListEmployees] = useState([...rows]);
  return (
    <div>
      <table className={style.table}>
        <thead className={style.headColumns}>
          <tr>
            {headColumns.map(({ title }, index) => (
              <th key={`${index}-${title}`}> {title} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(0, rowsPerPage).map((row, index) => {
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
    </div>
  );
};

export default Table;
