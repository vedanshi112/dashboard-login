"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _recharts = require("recharts");
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const data = [{
  value: 20
}, {
  value: 10
}, {
  value: 25
}, {
  value: 15
}, {
  value: 22
}, {
  value: 30
}];
function TinyPurpleChart() {
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      width: "240px",
      height: "75px",
      borderRadius: "0 0 12px 12px",
      overflow: "hidden",
      backgroundColor: "#8950fc",
      // Deep purple background
      // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
      marginLeft: '-24px'
    }
  }, /*#__PURE__*/_react.default.createElement(_recharts.ResponsiveContainer, {
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/_react.default.createElement(_recharts.AreaChart, {
    data: data
  }, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "purpleGradient",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0%",
    stopColor: "#ffffff",
    stopOpacity: 0.5
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "100%",
    stopColor: "#ffffff",
    stopOpacity: 0
  }))), /*#__PURE__*/_react.default.createElement(_recharts.Area, {
    type: "monotone",
    dataKey: "value",
    stroke: "#ffffff",
    fill: "url(#purpleGradient)",
    strokeWidth: 2
  }))));
}
var _default = exports.default = TinyPurpleChart;