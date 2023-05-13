import EmployeesTable from "./components/EmployeesTable";
import { ContextSearchContextProvider } from "./utils/context/searchContext";
import { ContextRowsPerPageContextProvider } from "./utils/context/rowsPerPageContext";
import { ContextCurrentPageContextProvider } from "./utils/context/currentPageContext";

export {
  EmployeesTable,
  ContextRowsPerPageContextProvider,
  ContextSearchContextProvider,
  ContextCurrentPageContextProvider,
};

export default (EmployeesTable,
ContextRowsPerPageContextProvider,
ContextSearchContextProvider,
ContextCurrentPageContextProvider);
