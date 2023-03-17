import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { employeesList, headColumns } from "./lib/example/data";
import { EmployeesTable } from "./lib";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EmployeesTable rows={employeesList} headColumns={headColumns} />
  </React.StrictMode>
);
