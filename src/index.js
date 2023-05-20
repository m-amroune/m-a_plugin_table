import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { rows, headColumns } from "./lib/example/data";
import { EmployeesTable } from "./lib";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EmployeesTable rows={rows} headColumns={headColumns} />
  </React.StrictMode>
);
