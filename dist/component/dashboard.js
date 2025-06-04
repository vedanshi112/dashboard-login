"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _header = _interopRequireDefault(require("./header"));
require("../Css/dashboard.css");
var _react = _interopRequireDefault(require("react"));
var _icons = require("@ant-design/icons");
var _WidgetsOutlined = _interopRequireDefault(require("@mui/icons-material/WidgetsOutlined"));
var _HttpsOutlined = _interopRequireDefault(require("@mui/icons-material/HttpsOutlined"));
var _WarningAmberOutlined = _interopRequireDefault(require("@mui/icons-material/WarningAmberOutlined"));
var _FeaturedPlayListOutlined = _interopRequireDefault(require("@mui/icons-material/FeaturedPlayListOutlined"));
var _ArticleOutlined = _interopRequireDefault(require("@mui/icons-material/ArticleOutlined"));
var _AccountTreeOutlined = _interopRequireDefault(require("@mui/icons-material/AccountTreeOutlined"));
var _BackupTableOutlined = _interopRequireDefault(require("@mui/icons-material/BackupTableOutlined"));
var _antd = require("antd");
var _page = _interopRequireDefault(require("./page1"));
var _page2 = _interopRequireDefault(require("./page2"));
var _page3 = _interopRequireDefault(require("./page3"));
var _page4 = _interopRequireDefault(require("./page4"));
var _page5 = _interopRequireDefault(require("./page5"));
var _page6 = _interopRequireDefault(require("./page6"));
var _page7 = _interopRequireDefault(require("./page7"));
var _page8 = _interopRequireDefault(require("./page8"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const {
  Header,
  Content,
  Footer,
  Sider
} = _antd.Layout;
const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineEnd: 0,
  // Changed from `insetInlineStart` to `insetInlineEnd` to push to the right
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable'
};

// const items = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   BarChartOutlined,
//   CloudOutlined,
//   AppstoreOutlined,
//   TeamOutlined,
//   ShopOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }));

// const items = [
//   { icon: UserOutlined, label: 'User' },
//   { icon: VideoCameraOutlined, label: 'Video' },
//   { icon: UploadOutlined, label: 'Upload' },
//   { icon: BarChartOutlined, label: 'Analytics' },
//   { icon: CloudOutlined, label: 'Cloud' },
//   { icon: AppstoreOutlined, label: 'Apps' },
//   { icon: TeamOutlined, label: 'Team' },
//   { label: 'Shop',icon: ShopOutlined },
// ]
// const items = [
//   {
//     key: '1',
//     icon: React.createElement(UserOutlined),
//     label: 'User',
//     children: [
//       { key: '1-1', label: 'Profile' },
//       { key: '1-2', label: 'Settings' },
//       { key: '1-3', label: 'Logout' },
//     ],
//   },
//   {
//     key: '2',
//     icon: React.createElement(VideoCameraOutlined),
//     label: 'Video',
//   },
//   {
//     key: '3',
//     icon: React.createElement(UploadOutlined),
//     label: 'Upload',
//   },
//   {
//     key: '4',
//     icon: React.createElement(BarChartOutlined),
//     label: 'Analytics',
//   },
//   {
//     key: '5',
//     icon: React.createElement(CloudOutlined),
//     label: 'Cloud',
//   },
//   {
//     key: '6',
//     icon: React.createElement(AppstoreOutlined),
//     label: 'Apps',
//   },
//   {
//     key: '7',
//     icon: React.createElement(TeamOutlined),
//     label: 'Team',
//   },
//   {
//     key: '8',
//     icon: React.createElement(ShopOutlined),
//     label: 'Shop',
//   },
// ].map((item, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(item.icon),
//   label: item.label,  // Custom name for each menu item
// }));

const rawItems = [{
  key: '1',
  label: /*#__PURE__*/_react.default.createElement("span", null, "Dashboard ", /*#__PURE__*/_react.default.createElement(_icons.DashboardOutlined, {
    style: {
      marginLeft: '29px'
    }
  })),
  children: [{
    key: '1-1',
    label: 'Dashboard 1'
  }, {
    key: '1-2',
    label: 'Dashboaed 2'
  }, {
    key: '1-3',
    label: 'Dashboard 3'
  }, {
    key: '1-4',
    label: 'Dashboard 4'
  }, {
    key: '1-5',
    label: 'Dashboaed 5'
  }, {
    key: '1-6',
    label: 'Dashboard 6'
  }]
}, {
  key: '2',
  label: /*#__PURE__*/_react.default.createElement("span", null, "Overview ", /*#__PURE__*/_react.default.createElement(_icons.SlidersOutlined, {
    style: {
      marginLeft: '40px'
    }
  }))
}, {
  key: '3',
  label: /*#__PURE__*/_react.default.createElement("span", null, "Analytics ", /*#__PURE__*/_react.default.createElement(_icons.BarChartOutlined, {
    style: {
      marginLeft: '45px'
    }
  }))
}, {
  key: '4',
  label: /*#__PURE__*/_react.default.createElement("span", null, "Apps ", /*#__PURE__*/_react.default.createElement(_icons.AppstoreAddOutlined, {
    style: {
      marginLeft: '67px'
    }
  })),
  children: [{
    key: '2-1',
    label: 'Apps ...'
  }, {
    key: '2-2',
    label: 'Sample Pages...'
  }]
}, {
  key: '5',
  label: /*#__PURE__*/_react.default.createElement("span", null, "Widgets ", /*#__PURE__*/_react.default.createElement(_WidgetsOutlined.default, {
    style: {
      marginLeft: '49px',
      fontSize: 'medium'
    }
  })),
  children: [{
    key: '3-1',
    label: 'Custom ...'
  }, {
    key: '3-2',
    label: 'Maps ...'
  }, {
    key: '3-3',
    label: 'Modals ...'
  }]
}, {
  key: '6',
  label: /*#__PURE__*/_react.default.createElement("span", null, "Authentication ", /*#__PURE__*/_react.default.createElement(_HttpsOutlined.default, {
    style: {
      marginLeft: 8,
      fontSize: 'medium'
    }
  })),
  children: [{
    key: '4-1',
    label: 'Login ...'
  }, {
    key: '4-2',
    label: 'Register ...'
  }, {
    key: '4-3',
    label: 'Lockscreen ...'
  }, {
    key: '4-4',
    label: 'Recover Password ...'
  }]
}, {
  key: '7',
  label: /*#__PURE__*/_react.default.createElement("span", null, "Miscellaneous ", /*#__PURE__*/_react.default.createElement(_WarningAmberOutlined.default, {
    style: {
      marginLeft: 9,
      fontSize: 'medium'
    }
  })),
  children: [{
    key: '5-1',
    label: 'Error 404 ...'
  }, {
    key: '5-2',
    label: 'Error 500 ...'
  }, {
    key: '5-3',
    label: 'Maintenance ...'
  }]
}, {
  key: '8',
  label: /*#__PURE__*/_react.default.createElement("span", null, "Features ", /*#__PURE__*/_react.default.createElement(_FeaturedPlayListOutlined.default, {
    style: {
      marginLeft: '45px',
      fontSize: 'medium'
    }
  })),
  children: [{
    key: '6-1',
    label: 'card'
  }, {
    key: '6-2',
    label: 'BS UI'
  }, {
    key: '6-3',
    label: 'Icons'
  }, {
    key: '6-4',
    label: 'Custom UI'
  }, {
    key: '6-5',
    label: 'Components'
  }]
}, {
  key: '9',
  label: /*#__PURE__*/_react.default.createElement("span", null, "Forms ", /*#__PURE__*/_react.default.createElement(_ArticleOutlined.default, {
    style: {
      marginLeft: '60px',
      fontSize: 'medium'
    }
  })),
  children: [{
    key: '7-1',
    label: 'Form Element ...'
  }, {
    key: '7-2',
    label: 'Form Layout ...'
  }, {
    key: '7-3',
    label: 'Form Wizard ...'
  }, {
    key: '7-4',
    label: 'Form Validation ...'
  }, {
    key: '7-5',
    label: 'Formatter ...'
  }, {
    key: '7-6',
    label: 'Xeditable Editor ...'
  }, {
    key: '7-7',
    label: 'Dropzone ...'
  }, {
    key: '7-8',
    label: 'Code Editor ...'
  }, {
    key: '7-9',
    label: 'Editor ...'
  }, {
    key: '7-10',
    label: 'Markdown ...'
  }]
}, {
  key: '10',
  label: /*#__PURE__*/_react.default.createElement("span", null, "Charts ", /*#__PURE__*/_react.default.createElement(_AccountTreeOutlined.default, {
    style: {
      marginLeft: '59px',
      fontSize: 'medium'
    }
  })),
  children: [{
    key: '8-1',
    label: 'ChartJS ...'
  }, {
    key: '8-2',
    label: 'Flot ...'
  }, {
    key: '8-3',
    label: 'Inline Charts ...'
  }, {
    key: '8-4',
    label: 'Morries ...'
  }, {
    key: '8-5',
    label: 'Peity ...'
  }, {
    key: '8-6',
    label: 'Chartist ...'
  }, {
    key: '8-7',
    label: 'Axis Chart ...'
  }, {
    key: '8-8',
    label: 'Bar Chart ...'
  }, {
    key: '8-9',
    label: 'Data Chart ...'
  }, {
    key: '8-10',
    label: 'Pie & Doughnut Chart ...'
  }]
}, {
  key: '10',
  label: /*#__PURE__*/_react.default.createElement("span", null, "Tables ", /*#__PURE__*/_react.default.createElement(_BackupTableOutlined.default, {
    style: {
      marginLeft: '59px',
      fontSize: 'medium'
    }
  })),
  children: [{
    key: '9-1',
    label: 'Simple Table ...'
  }, {
    key: '9-2',
    label: 'Data Tables ...'
  }, {
    key: '9-3',
    label: 'Editable Tables ...'
  }, {
    key: '9-4',
    label: 'Table Color ...'
  }]
}];
const items = rawItems; // No mapping needed anymore

const App1 = () => {
  const {
    token: {
      colorBgContainer,
      borderRadiusLG
    }
  } = _antd.theme.useToken();
  return /*#__PURE__*/_react.default.createElement(_antd.Layout, {
    hasSider: true
  }, /*#__PURE__*/_react.default.createElement(_antd.Layout, null, /*#__PURE__*/_react.default.createElement(Header, {
    style: {
      padding: 0,
      background: colorBgContainer
    }
  }, /*#__PURE__*/_react.default.createElement(_header.default, null)), /*#__PURE__*/_react.default.createElement(Content, {
    style: {
      margin: '24px 16px 0',
      overflow: 'initial'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '24px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: 24,
      textAlign: 'center',
      background: colorBgContainer,
      borderRadius: borderRadiusLG,
      width: '240px',
      height: '250px'
    }
  }, /*#__PURE__*/_react.default.createElement(_page.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: 24,
      textAlign: 'center',
      background: colorBgContainer,
      borderRadius: borderRadiusLG,
      width: '240px',
      height: '250px'
    }
  }, /*#__PURE__*/_react.default.createElement(_page2.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: 24,
      textAlign: 'center',
      background: colorBgContainer,
      borderRadius: borderRadiusLG,
      width: '240px',
      height: '250px'
    }
  }, /*#__PURE__*/_react.default.createElement(_page3.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: 24,
      textAlign: 'center',
      background: colorBgContainer,
      borderRadius: borderRadiusLG,
      width: '240px',
      height: '250px',
      backgroundColor: '#8950fc'
    }
  }, /*#__PURE__*/_react.default.createElement(_page4.default, null))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '24px',
      marginTop: '20px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: 24,
      textAlign: 'center',
      background: colorBgContainer,
      borderRadius: borderRadiusLG,
      width: '320px',
      height: '380px'
    }
  }, /*#__PURE__*/_react.default.createElement(_page5.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: 24,
      textAlign: 'center',
      background: colorBgContainer,
      borderRadius: borderRadiusLG,
      width: '686px',
      height: '380px'
    }
  }, /*#__PURE__*/_react.default.createElement(_page6.default, null))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '24px',
      marginTop: '20px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: 24,
      textAlign: 'center',
      background: colorBgContainer,
      borderRadius: borderRadiusLG,
      width: '700px',
      // height: '380px',
      height: 'auto'
    }
  }, /*#__PURE__*/_react.default.createElement(_page7.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: 24,
      textAlign: 'center',
      background: colorBgContainer,
      borderRadius: borderRadiusLG,
      width: '300px',
      height: '380px'
    }
  }, /*#__PURE__*/_react.default.createElement(_page8.default, null)))), /*#__PURE__*/_react.default.createElement(Footer, {
    style: {}
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "multiplethemes"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "purchase"
  }, " Purchase Now ", /*#__PURE__*/_react.default.createElement("span", {
    className: "slash"
  }, " /"), " FAQ"), /*#__PURE__*/_react.default.createElement("p", {
    className: "themes"
  }, ".", /*#__PURE__*/_react.default.createElement("span", {
    className: "multi"
  }, "Multipurpose Themes"), ". All Rights Reserved\xA9", new Date().getFullYear()))))), /*#__PURE__*/_react.default.createElement(Sider, {
    style: siderStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "demo-logo-vertical"
  }), /*#__PURE__*/_react.default.createElement(_antd.Menu, {
    theme: "dark",
    mode: "inline",
    defaultSelectedKeys: ['4'],
    items: items
  })));
};
var _default = exports.default = App1;