"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _PieChart = require("@mui/x-charts/PieChart");
var _hooks = require("@mui/x-charts/hooks");
var _styles = require("@mui/material/styles");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } // import * as React from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';
// import { useDrawingArea } from '@mui/x-charts/hooks';
// import { styled } from '@mui/material/styles';
// const data = [
//   { value: 80, label: 'A' },
//   { value: 20, label: 'B' },
//   { value: 15, label: 'C' },
//   { value: 20, label: 'D' },
// ];
// const size = {
//   width: 200,
//   height: 200,
// };
// const StyledText = styled('text')(({ theme }) => ({
//   fill: theme.palette.text.primary,
//   textAnchor: 'middle',
//   dominantBaseline: 'central',
//   fontSize: 20,
// }));
// function PieCenterLabel({ children }) {
//   const { width, height, left, top } = useDrawingArea();
//   return (
//     <StyledText x={left + width / 2} y={top + height / 2}>
//       {children}
//     </StyledText>
//   );
// }
//  function PieChartWithCenterLabel() {
//   return (
//     <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
//       <PieCenterLabel></PieCenterLabel>
//     </PieChart>
//   );
// }
// export default PieChartWithCenterLabel;
const data = [{
  value: 80,
  label: 'Completed',
  color: '#6A9EFF'
},
// blue (same as image)
{
  value: 20,
  label: 'Active',
  color: '#B3C1D1'
} // light gray (same as image)
];
const size = {
  width: 200,
  height: 200
};
const StyledText = (0, _styles.styled)('text')(_ref => {
  let {
    theme
  } = _ref;
  return {
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20
  };
});
function PieCenterLabel(_ref2) {
  let {
    children
  } = _ref2;
  const {
    width,
    height,
    left,
    top
  } = (0, _hooks.useDrawingArea)();
  return /*#__PURE__*/React.createElement(StyledText, {
    x: left + width / 2,
    y: top + height / 2
  }, children);
}
function PieChartWithCenterLabel() {
  return /*#__PURE__*/React.createElement(_PieChart.PieChart, _extends({
    series: [{
      data,
      innerRadius: 70,
      outerRadius: 100,
      cornerRadius: 5
    }]
  }, size), /*#__PURE__*/React.createElement(PieCenterLabel, null));
}
var _default = exports.default = PieChartWithCenterLabel;