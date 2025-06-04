"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../Css/page3.css");
var _PeopleAltOutlined = _interopRequireDefault(require("@mui/icons-material/PeopleAltOutlined"));
var _ArrowUpwardOutlined = _interopRequireDefault(require("@mui/icons-material/ArrowUpwardOutlined"));
var _pg3chart = _interopRequireDefault(require("./pg3chart"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Page3 = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "border1"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "visit1"
  }, "Total ", /*#__PURE__*/React.createElement("br", null), "Visitors"), /*#__PURE__*/React.createElement("div", {
    className: "visitors"
  }, /*#__PURE__*/React.createElement(_PeopleAltOutlined.default, {
    className: "Visitors1"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "million1"
  }, "6.25M")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "vs"
  }, "vs Last Month ", /*#__PURE__*/React.createElement("span", {
    className: "percentage1"
  }, "25% ", /*#__PURE__*/React.createElement(_ArrowUpwardOutlined.default, {
    className: "arrow1"
  })), " ")), /*#__PURE__*/React.createElement(_pg3chart.default, null)));
};
var _default = exports.default = Page3;