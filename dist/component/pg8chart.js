"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _recharts = require("recharts");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const data = [{
  time: "12am",
  value: 60
}, {
  time: "6am",
  value: 20
}, {
  time: "8am",
  value: 50
}, {
  time: "11am",
  value: 90
}, {
  time: "3pm",
  value: 70
}, {
  time: "7pm",
  value: 65
}, {
  time: "10pm",
  value: 25
}];
function TimeChart() {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "300px",
      height: "340px",
      marginLeft: '-24px',
      marginTop: '-15px'
    }
  }, /*#__PURE__*/_react.default.createElement(_recharts.ResponsiveContainer, {
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/_react.default.createElement(_recharts.BarChart, {
    data: data
  }, /*#__PURE__*/_react.default.createElement(_recharts.XAxis, {
    dataKey: "time"
  }), /*#__PURE__*/_react.default.createElement(_recharts.YAxis, {
    hide: true
  }), /*#__PURE__*/_react.default.createElement(_recharts.Tooltip, null), /*#__PURE__*/_react.default.createElement(_recharts.Bar, {
    dataKey: "value",
    fill: "#4285f4",
    radius: [10, 10, 0, 0],
    barSize: 15
  }))));
}
var _default = exports.default = TimeChart;