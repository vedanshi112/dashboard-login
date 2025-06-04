"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../Css/page6.css");
var _dropdown = _interopRequireDefault(require("./dropdown"));
var _pg6chart = _interopRequireDefault(require("./pg6chart"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Page6 = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "growing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dropdownbutton"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "download"
  }, "Download Report"), /*#__PURE__*/React.createElement(_dropdown.default, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "grow"
  }, "Growth"))), /*#__PURE__*/React.createElement(_pg6chart.default, null)));
};
var _default = exports.default = Page6;