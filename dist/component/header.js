"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../Css/header.css");
var _TimelineTwoTone = _interopRequireDefault(require("@mui/icons-material/TimelineTwoTone"));
var _Person2TwoTone = _interopRequireDefault(require("@mui/icons-material/Person2TwoTone"));
var _CropFreeTwoTone = _interopRequireDefault(require("@mui/icons-material/CropFreeTwoTone"));
var _NotificationsNoneTwoTone = _interopRequireDefault(require("@mui/icons-material/NotificationsNoneTwoTone"));
var _LocalActivityTwoTone = _interopRequireDefault(require("@mui/icons-material/LocalActivityTwoTone"));
var _EditCalendarTwoTone = _interopRequireDefault(require("@mui/icons-material/EditCalendarTwoTone"));
var _LibraryAddCheckTwoTone = _interopRequireDefault(require("@mui/icons-material/LibraryAddCheckTwoTone"));
var _EmailTwoTone = _interopRequireDefault(require("@mui/icons-material/EmailTwoTone"));
var _MessageTwoTone = _interopRequireDefault(require("@mui/icons-material/MessageTwoTone"));
var _FormatAlignRightTwoTone = _interopRequireDefault(require("@mui/icons-material/FormatAlignRightTwoTone"));
var _icons = require("@ant-design/icons");
var _antd = require("antd");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import React from 'react';

const HeaderContent = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "social"
  }, /*#__PURE__*/React.createElement("div", {
    className: "notification"
  }, /*#__PURE__*/React.createElement(_TimelineTwoTone.default, {
    className: "timeline"
  }), /*#__PURE__*/React.createElement(_Person2TwoTone.default, {
    className: "timeline"
  }), /*#__PURE__*/React.createElement(_NotificationsNoneTwoTone.default, {
    className: "timeline"
  }), /*#__PURE__*/React.createElement(_antd.Input, {
    size: "large",
    placeholder: "Search ..",
    prefix: /*#__PURE__*/React.createElement(_icons.SearchOutlined, null),
    style: {
      width: '200px',
      height: '30px',
      marginTop: '-5px'
    }
  }), /*#__PURE__*/React.createElement(_CropFreeTwoTone.default, {
    className: "timeline"
  })), /*#__PURE__*/React.createElement("div", {
    className: "medias"
  }, /*#__PURE__*/React.createElement(_LocalActivityTwoTone.default, {
    className: "timeline"
  }), /*#__PURE__*/React.createElement(_EditCalendarTwoTone.default, {
    className: "timeline"
  }), /*#__PURE__*/React.createElement(_LibraryAddCheckTwoTone.default, {
    className: "timeline"
  }), /*#__PURE__*/React.createElement(_EmailTwoTone.default, {
    className: "timeline"
  }), /*#__PURE__*/React.createElement(_MessageTwoTone.default, {
    className: "timeline"
  }), /*#__PURE__*/React.createElement(_FormatAlignRightTwoTone.default, {
    className: "timeline"
  }))));
};
var _default = exports.default = HeaderContent;