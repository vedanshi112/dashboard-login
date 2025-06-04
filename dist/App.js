"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRouterDom = require("react-router-dom");
require("./App.css");
var _dashboard = _interopRequireDefault(require("./component/dashboard"));
var _loginform = _interopRequireDefault(require("./component/loginform"));
var _ProtectedRoute = _interopRequireDefault(require("./component/ProtectedRoute"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import ProtectedRoute from './component/ProtectedRoute'; 

function App() {
  return /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(_loginform.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/dashboard",
    element: /*#__PURE__*/React.createElement(_ProtectedRoute.default, null, /*#__PURE__*/React.createElement(_dashboard.default, null))
  })));
}
var _default = exports.default = App;