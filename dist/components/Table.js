"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.sort.js");
var _react = require("react");
var _styleModule = _interopRequireDefault(require("./style.module.css"));
var _bi = require("react-icons/bi");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Table = _ref => {
  let {
    headColumns,
    employeesList,
    rows,
    rowsPerPage
  } = _ref;
  const [currentListEmployees, setCurrentListEmployees] = (0, _react.useState)([...rows]);
  const [page, setPage] = (0, _react.useState)(0);
  const [sortedEmployeesList, setSortedEmployeesList] = (0, _react.useState)(employeesList);
  const [sortColumn, setSortColumn] = (0, _react.useState)();
  const [sortAscending, setSortAscending] = (0, _react.useState)(true);

  // useEffect(() => {
  //   setCurrentListEmployees(rows);
  // }, [rows]);

  const sortByColumn = headColumn => {
    let tempSortedEmployeesList = [...employeesList];
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
    setSortedEmployeesList(tempSortedEmployeesList);
  };
  const onPrevious = () => {
    setPage(page - 1 > -1 ? page - 1 : page);
  };
  const onNext = () => {
    setPage(page + 1 < rows.length / rowsPerPage ? page + 1 : page);
  };
  return /*#__PURE__*/React.createElement("div", null, employeesList.length >= 0 && /*#__PURE__*/React.createElement("table", {
    className: _styleModule.default.table
  }, /*#__PURE__*/React.createElement("thead", {
    className: _styleModule.default.headColumns
  }, /*#__PURE__*/React.createElement("tr", null, headColumns.map((_ref2, index) => {
    let {
      title
    } = _ref2;
    return /*#__PURE__*/React.createElement("th", {
      onClick: () => sortByColumn(title.toLowerCase()),
      key: "".concat(index, "-").concat(title)
    }, title, /*#__PURE__*/React.createElement("div", {
      className: _styleModule.default["headColumns-cell"]
    }, /*#__PURE__*/React.createElement(_bi.BiUpArrow, null), " ", /*#__PURE__*/React.createElement(_bi.BiDownArrow, null)));
  }))), /*#__PURE__*/React.createElement("tbody", null, sortedEmployeesList.slice(rowsPerPage * page, rowsPerPage * page + rowsPerPage).map((row, index) => {
    return /*#__PURE__*/React.createElement("tr", {
      className: _styleModule.default.columns,
      key: index
    }, /*#__PURE__*/React.createElement("td", null, " ", row.firstName, " "), /*#__PURE__*/React.createElement("td", null, " ", row.lastName, " "), /*#__PURE__*/React.createElement("td", null, " ", row.startDate, " "), /*#__PURE__*/React.createElement("td", null, " ", row.department, " "), /*#__PURE__*/React.createElement("td", null, " ", row.dateOFBirth, " "), /*#__PURE__*/React.createElement("td", null, " ", row.street, " "), /*#__PURE__*/React.createElement("td", null, " ", row.city, " "), /*#__PURE__*/React.createElement("td", null, " ", row.state, " "), /*#__PURE__*/React.createElement("td", null, " ", row.zipCode, " "));
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    className: _styleModule.default.button,
    onClick: onPrevious
  }, "Previous"), /*#__PURE__*/React.createElement("label", {
    className: _styleModule.default["page-number"]
  }, page + 1), /*#__PURE__*/React.createElement("button", {
    className: _styleModule.default.button,
    onClick: onNext
  }, "Next")));
};
var _default = Table;
exports.default = _default;