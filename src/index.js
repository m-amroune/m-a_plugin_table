import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { rows, headColumns } from "./lib/example/data";
import {
  EmployeesTable,
  ContextSearchContextProvider,
  ContextRowsPerPageContextProvider,
  ContextCurrentPageContextProvider,
} from "./lib";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextRowsPerPageContextProvider>
      <ContextSearchContextProvider>
        <ContextCurrentPageContextProvider>
          <EmployeesTable rows={rows} headColumns={headColumns} />
        </ContextCurrentPageContextProvider>
      </ContextSearchContextProvider>
    </ContextRowsPerPageContextProvider>
  </React.StrictMode>
);
