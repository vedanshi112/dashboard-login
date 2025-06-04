"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRouterDom = require("react-router-dom");
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//     const isLoggedIn = localStorage.getItem('isLoggedIn');
//     return isLoggedIn === 'true' ? children : <Navigate to="/" />;
// };

// export default ProtectedRoute;

const ProtectedRoute = _ref => {
  let {
    children
  } = _ref;
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  console.log("🔐 ProtectedRoute: isLoggedIn =", isLoggedIn); // Debug line

  // Always use React Fragment to wrap children
  return isLoggedIn === 'true' ? /*#__PURE__*/React.createElement(React.Fragment, null, children) : /*#__PURE__*/React.createElement(_reactRouterDom.Navigate, {
    to: "/"
  });
};
var _default = exports.default = ProtectedRoute;