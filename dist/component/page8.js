"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../Css/page8.css");
var _pg8chart = _interopRequireDefault(require("./pg8chart"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Page8 = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "actbtn"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "daybtn"
  }, "Days"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "hourbtn"
  }, "Hours"), /*#__PURE__*/React.createElement("h4", {
    className: "active"
  }, "Active Time")), /*#__PURE__*/React.createElement(_pg8chart.default, null)));
};
var _default = exports.default = Page8;