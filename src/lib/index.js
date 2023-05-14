import EmployeesTable from "./components/EmployeesTable";
import { ContextSearchContextProvider } from "./utils/context/searchContext";
import { ContextRowsPerPageContextProvider } from "./utils/context/rowsPerPageContext";
import { ContextCurrentPageContextProvider } from "./utils/context/currentPageContext";
import { ContextTotalRowsContextProvider } from "./utils/context/totalRowsContext";

export {
  EmployeesTable,
  ContextRowsPerPageContextProvider,
  ContextSearchContextProvider,
  ContextCurrentPageContextProvider,
  ContextTotalRowsContextProvider,
};

export default (EmployeesTable,
ContextRowsPerPageContextProvider,
ContextSearchContextProvider,
ContextCurrentPageContextProvider,
ContextTotalRowsContextProvider);
