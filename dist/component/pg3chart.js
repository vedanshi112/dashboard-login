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
  value: 18
}];
function TinyGreenChart() {
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      width: "240px",
      height: "75px",
      borderRadius: "0 0 12px 12px",
      overflow: "hidden",
      backgroundColor: "#fff",
      // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
      marginLeft: '-24px'
    }
  }, /*#__PURE__*/_react.default.createElement(_recharts.ResponsiveContainer, {
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/_react.default.createElement(_recharts.AreaChart, {
    data: data
  }, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "greenGradient",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0%",
    stopColor: "#4caf50",
    stopOpacity: 0.5
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "100%",
    stopColor: "#4caf50",
    stopOpacity: 0
  }))), /*#__PURE__*/_react.default.createElement(_recharts.Area, {
    type: "monotone",
    dataKey: "value",
    stroke: "#4caf50",
    fill: "url(#greenGradient)",
    strokeWidth: 2
  }))));
}
var _default = exports.default = TinyGreenChart;