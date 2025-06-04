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
  name: "w-1",
  value: 100
}, {
  name: "w-2",
  value: 80
}, {
  name: "w-3",
  value: 130
}, {
  name: "w-4",
  value: 130
}, {
  name: "w-5",
  value: 180
}, {
  name: "w-6",
  value: 260
},
// 🔵 Highlighted blue bar
{
  name: "w-7",
  value: 160
}, {
  name: "w-8",
  value: 210
}, {
  name: "w-9",
  value: 170
}];
function CustomBarChart() {
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      width: "686px",
      height: "320px",
      marginLeft: '-22px'
    }
  }, /*#__PURE__*/_react.default.createElement(_recharts.ResponsiveContainer, {
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/_react.default.createElement(_recharts.BarChart, {
    data: data
  }, /*#__PURE__*/_react.default.createElement(_recharts.XAxis, {
    dataKey: "name",
    tick: {
      fill: "#333"
    }
  }), /*#__PURE__*/_react.default.createElement(_recharts.YAxis, {
    hide: true
  }), /*#__PURE__*/_react.default.createElement(_recharts.Tooltip, null), /*#__PURE__*/_react.default.createElement(_recharts.Bar, {
    dataKey: "value",
    radius: [6, 6, 0, 0],
    barSize: 30 // 📏 Bar width set here
  }, data.map((entry, index) => /*#__PURE__*/_react.default.createElement(_recharts.Cell, {
    key: `cell-${index}`,
    fill: index === 5 ? "#6495FF" : "#A0A0A0" // 🔵 w-6 = blue, others = gray
  }))))));
}
var _default = exports.default = CustomBarChart;