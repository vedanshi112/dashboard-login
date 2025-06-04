"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _xDataGrid = require("@mui/x-data-grid");
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const columns = [{
  field: 'id',
  headerName: 'ID',
  width: 70
}, {
  field: 'firstName',
  headerName: 'First name',
  width: 130
}, {
  field: 'lastName',
  headerName: 'Last name',
  width: 130
}, {
  field: 'age',
  headerName: 'Age',
  type: 'number',
  width: 90
}, {
  field: 'fullName',
  headerName: 'Full name',
  description: 'This column has a value getter and is not sortable.',
  sortable: false,
  width: 160,
  valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`
}];
const rows = [{
  id: 1,
  lastName: 'Snow',
  firstName: 'Jon',
  age: 35
}, {
  id: 2,
  lastName: 'Lannister',
  firstName: 'Cersei',
  age: 42
}, {
  id: 3,
  lastName: 'Lannister',
  firstName: 'Jaime',
  age: 45
}, {
  id: 4,
  lastName: 'Stark',
  firstName: 'Arya',
  age: 16
}, {
  id: 5,
  lastName: 'Targaryen',
  firstName: 'Daenerys',
  age: null
}, {
  id: 6,
  lastName: 'Melisandre',
  firstName: null,
  age: 150
}, {
  id: 7,
  lastName: 'Clifford',
  firstName: 'Ferrara',
  age: 44
}, {
  id: 8,
  lastName: 'Frances',
  firstName: 'Rossini',
  age: 36
}, {
  id: 9,
  lastName: 'Roxie',
  firstName: 'Harvey',
  age: 65
}];
const paginationModel = {
  page: 0,
  pageSize: 5
};
function DataTable() {
  return /*#__PURE__*/React.createElement(_Paper.default, {
    sx: {
      height: 400,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(_xDataGrid.DataGrid, {
    rows: rows,
    columns: columns,
    initialState: {
      pagination: {
        paginationModel
      }
    },
    pageSizeOptions: [5, 10],
    checkboxSelection: true,
    sx: {
      border: 0
    }
  }));
}
var _default = exports.default = DataTable;