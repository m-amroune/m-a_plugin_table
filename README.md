# m-a_plugin_table

A React component table with pagination, sort and search filter

> Made with create-react-app

## Installation

You can install the m-a_plugin_table with npm

```bash
npm install m-a_plugin_table
```

## How to use (example)

```jsx
import {employesTable} from m-a_plugin_table
const headColumns = [
{ title: "First Name", value: "firstName" },
{ title: "Last Name", value: "lastName" },
{ title: "Start Date", value: "startDate" },
{ title: "Department", value: "department" },
{ title: "Date of Birth", value: "dateOFBirth" },
{ title: "Street", value: "street" },
{ title: "City", value: "city" },
{ title: "State", value: "state" },
{ title: "Zip Code", value: "zipCode" },
];
const App = () => {
return (

<div>
<EmployeesTable headColumns={headColumns} rows={rows} />
</div>
);
};
```
