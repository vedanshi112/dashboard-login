"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../Css/page1.css");
var _MoreVert = _interopRequireDefault(require("@mui/icons-material/MoreVert"));
var _pg1chart = _interopRequireDefault(require("./pg1chart"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Page1 = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "more"
  }, /*#__PURE__*/React.createElement(_MoreVert.default, null), /*#__PURE__*/React.createElement("h2", {
    className: "analy"
  }, "Analytics")), /*#__PURE__*/React.createElement(_pg1chart.default, null)));
};
var _default = exports.default = Page1;