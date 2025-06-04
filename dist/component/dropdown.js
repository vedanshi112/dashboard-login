"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _Edit = _interopRequireDefault(require("@mui/icons-material/Edit"));
var _CalendarToday = _interopRequireDefault(require("@mui/icons-material/CalendarToday"));
var _ArrowDropDown = _interopRequireDefault(require("@mui/icons-material/ArrowDropDown"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function YearDropdown() {
  const [anchorEl, setAnchorEl] = (0, _react.useState)(null);
  const [selectedYear, setSelectedYear] = (0, _react.useState)("2024");
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = year => {
    if (year) setSelectedYear(year);
    setAnchorEl(null);
  };
  const years = ["2023", "2022", "2024"];
  return /*#__PURE__*/_react.default.createElement(_material.Box, null, /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    onClick: handleClick,
    sx: {
      backgroundColor: "#ffff",
      color: '#3E5C78',
      borderRadius: "20px",
      padding: "6px 14px",
      border: '1px solid #3E5C78',
      height: '30px',
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#3E5C78",
        color: 'white'
      }
    },
    startIcon: /*#__PURE__*/_react.default.createElement(_ArrowDropDown.default, null),
    endIcon: /*#__PURE__*/_react.default.createElement(_CalendarToday.default, null)
  }, selectedYear), /*#__PURE__*/_react.default.createElement(_material.Menu, {
    anchorEl: anchorEl,
    open: open,
    onClose: () => handleClose(null),
    PaperProps: {
      sx: {
        borderRadius: "10px",
        mt: 1,
        boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
        padding: "4px 0"
      }
    }
  }, years.map(year => /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
    key: year,
    onClick: () => handleClose(year),
    sx: {
      justifyContent: "space-between",
      minWidth: 120
    }
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
    primary: year
  }), /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    size: "small",
    sx: {
      color: "#3E5C78"
    }
  }, /*#__PURE__*/_react.default.createElement(_Edit.default, {
    fontSize: "small"
  }))))));
}
var _default = exports.default = YearDropdown;