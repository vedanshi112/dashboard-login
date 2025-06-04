"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _axios = _interopRequireDefault(require("axios"));
require("../Css/loginform.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const LoginForm = () => {
  const [formData, setFormData] = (0, _react.useState)({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = (0, _react.useState)('');
  const navigate = (0, _reactRouterDom.useNavigate)();
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleLogin = async () => {
    try {
      const res = await _axios.default.get('http://localhost:5000/info');
      // Fix here: use res.data.info array
      const user = res.data.info.find(u => u.name === formData.name && u.email === formData.email && u.password === formData.password);
      if (user) {
        localStorage.setItem('isLoggedIn', 'true'); // 👈 Save login status
        navigate('/dashboard');
      } else {
        setError('Invalid credentials. Try again.');
      }
    } catch (err) {
      setError('Server error. Please try later.');
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    setError(''); // clear previous errors
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill all fields');
      return;
    }
    handleLogin();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "loginform"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "name"
  }, "Name :"), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    id: "name",
    value: formData.name,
    onChange: handleChange
  }), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "Email :"), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email",
    id: "email",
    value: formData.email,
    onChange: handleChange
  }), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: "password"
  }, "Password :"), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "password",
    name: "password",
    id: "password",
    value: formData.password,
    onChange: handleChange
  }), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "log"
  }, "Login")), error && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'red',
      textAlign: 'center',
      paddingTop: '15px'
    }
  }, error));
};
var _default = exports.default = LoginForm;