import { useState } from "react";
import style from "./style.module.css";

const Pagination = ({ pageSize = 10, rows, rowsPerPage }) => {
  const [page, setPage] = useState(0);

  const onPrevious = () => {
    setPage(page - 1 > -1 ? page - 1 : page);
  };

  const onNext = () => {
    setPage(page + 1 < rows.length / pageSize ? page + 1 : page);
  };

  return (
    <div>
      <button className={style.button} onClick={onPrevious}>
        Previous
      </button>
      <label className={style["page-number"]}>{page + 1}</label>
      <button className={style.button} onClick={onNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
