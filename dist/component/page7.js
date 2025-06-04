"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../Css/page7.css");
var _react = _interopRequireDefault(require("react"));
var _icons = require("@ant-design/icons");
var _antd = require("antd");
var _table = _interopRequireDefault(require("./table"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

// import BasicTable from './table';

const Page7 = () => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "newuser1"
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    size: "small",
    placeholder: "",
    prefix: /*#__PURE__*/_react.default.createElement(_icons.SearchOutlined, null),
    style: {
      width: '50px',
      borderRadius: '20px',
      backgroundColor: '#f2f2f5',
      height: '30px'
    }
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "newuser"
  }, "New Users"))), /*#__PURE__*/_react.default.createElement(_table.default, null));
};
var _default = exports.default = Page7;