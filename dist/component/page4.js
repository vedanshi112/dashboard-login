"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../Css/page4.css");
var _Person3Outlined = _interopRequireDefault(require("@mui/icons-material/Person3Outlined"));
var _ArrowUpwardOutlined = _interopRequireDefault(require("@mui/icons-material/ArrowUpwardOutlined"));
var _pg4chart = _interopRequireDefault(require("./pg4chart"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Page4 = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "border1"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "total"
  }, "New ", /*#__PURE__*/React.createElement("br", null), "Followers"), /*#__PURE__*/React.createElement("div", {
    className: "follow1"
  }, /*#__PURE__*/React.createElement(_Person3Outlined.default, {
    className: "follow"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "million4"
  }, "4.5M")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "vs4"
  }, "vs Last Month ", /*#__PURE__*/React.createElement("span", {
    className: "percentage4"
  }, "25% ", /*#__PURE__*/React.createElement(_ArrowUpwardOutlined.default, {
    className: "arrow4"
  })), " ")), /*#__PURE__*/React.createElement(_pg4chart.default, null)));
};
var _default = exports.default = Page4;