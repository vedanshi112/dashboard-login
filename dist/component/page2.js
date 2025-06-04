"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../Css/page2.css");
var _ChatOutlined = _interopRequireDefault(require("@mui/icons-material/ChatOutlined"));
var _ArrowDownward = _interopRequireDefault(require("@mui/icons-material/ArrowDownward"));
var _pg2chart = _interopRequireDefault(require("./pg2chart"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import TinyLineChart from './pg2chart';
// import SmoothAreaChart from './pg2chart';

const Page2 = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "border"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "chat"
  }, "Chat"), /*#__PURE__*/React.createElement("div", {
    className: "chatout1"
  }, /*#__PURE__*/React.createElement(_ChatOutlined.default, {
    className: "chatout"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "million"
  }, "2M")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "vs"
  }, "vs Last Month ", /*#__PURE__*/React.createElement("span", {
    className: "percentage"
  }, "25% ", /*#__PURE__*/React.createElement(_ArrowDownward.default, {
    className: "arrow"
  })), " ")), /*#__PURE__*/React.createElement(_pg2chart.default, null)));
};
var _default = exports.default = Page2;