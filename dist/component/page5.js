"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../Css/page5.css");
var _pg5chart = _interopRequireDefault(require("./pg5chart"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import CircularRadarChart from './pg5chart';
// import CustomRadarChart from './pg5chart';

const Page5 = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "overview"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn"
  }, "View All"), /*#__PURE__*/React.createElement("h2", {
    className: "over"
  }, "Overview")), /*#__PURE__*/React.createElement(_pg5chart.default, null)));
};
var _default = exports.default = Page5;