"use strict";

var _react = require("@testing-library/react");
var _loginform = _interopRequireDefault(require("../component/loginform"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// component.test.js

// import LoginForm from '../loginform'; 

test('renders login heading', () => {
  (0, _react.render)(/*#__PURE__*/React.createElement(_loginform.default, null));
  const heading = _react.screen.getByText(/login/i);
  expect(heading).toBeInTheDocument();
});