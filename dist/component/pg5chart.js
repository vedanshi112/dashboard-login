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
  subject: "Like",
  A: 500
}, {
  subject: "Share",
  A: 300
}, {
  subject: "Saves",
  A: 250
}, {
  subject: "Comments",
  A: 180
}, {
  subject: "Interactions",
  A: 150
}];
function SmoothCircularRadarChart() {
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      width: 330,
      height: 285,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: '-28px'
    }
  }, /*#__PURE__*/_react.default.createElement(_recharts.RadarChart, {
    cx: "50%",
    cy: "50%",
    outerRadius: "80%",
    width: 285,
    height: 285,
    data: data
  }, /*#__PURE__*/_react.default.createElement(_recharts.PolarGrid, {
    gridType: "circle"
  }), /*#__PURE__*/_react.default.createElement(_recharts.PolarAngleAxis, {
    dataKey: "subject"
  }), /*#__PURE__*/_react.default.createElement(_recharts.PolarRadiusAxis, {
    angle: 90,
    domain: [0, 600]
  }), /*#__PURE__*/_react.default.createElement(_recharts.Radar, {
    name: "Activity",
    dataKey: "A",
    stroke: "#00BFFF",
    fill: "#00BFFF",
    fillOpacity: 0.5,
    dot: true
  })));
}
var _default = exports.default = SmoothCircularRadarChart;