"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
var _react = _interopRequireWildcard(require("react"));
var _Table = _interopRequireDefault(require("./Table"));
var _styleModule = _interopRequireDefault(require("./style.module.css"));
var _data = require("../example/data");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const EmployeesTable = _ref => {
  let {
    headColumns,
    rows
  } = _ref;
  const [searchValue, setSearchValue] = (0, _react.useState)("");
  const [rowsPerPage, setRowsPerPage] = (0, _react.useState)(10);
  const search = () => {
    return rows.filter(employee => employee.firstName.toLowerCase().includes(searchValue) || employee.lastName.toLowerCase().includes(searchValue) || employee.startDate.includes(searchValue) || employee.department.toLowerCase().includes(searchValue) || employee.dateOFBirth.includes(searchValue) || employee.street.toLowerCase().includes(searchValue) || employee.city.toLowerCase().includes(searchValue) || employee.state.toLowerCase().includes(searchValue) || employee.zipCode.includes(searchValue));
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default["entries-searchBar"]
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Show "), /*#__PURE__*/_react.default.createElement("select", {
    onChange: e => setRowsPerPage(e.target.value)
  }, /*#__PURE__*/_react.default.createElement("option", null, "10"), /*#__PURE__*/_react.default.createElement("option", null, "25"), /*#__PURE__*/_react.default.createElement("option", null, "50"), /*#__PURE__*/_react.default.createElement("option", null, "100")), /*#__PURE__*/_react.default.createElement("p", {
    className: _styleModule.default.paragraphEntries
  }, "entries")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Search : "), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    value: searchValue,
    onChange: e => setSearchValue(e.target.value)
  }))), /*#__PURE__*/_react.default.createElement(_Table.default, {
    rowsPerPage: rowsPerPage,
    headColumns: headColumns,
    rows: search(rows),
    employeesList: _data.employeesList
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "Showing ", " to ", " entries of ", rows.length, "entries")));
};
var _default = EmployeesTable;
exports.default = _default;