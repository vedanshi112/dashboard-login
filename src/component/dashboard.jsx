
import HeaderContent from './header';
import '../Css/dashboard.css';




import React from 'react';
import {
    BarChartOutlined,
    DashboardOutlined,
    SlidersOutlined,
    AppstoreAddOutlined,
} from '@ant-design/icons';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';


import { Layout, Menu, theme } from 'antd';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';
import Page5 from './page5';
import Page6 from './page6';
import Page7 from './page7';
import Page8 from './page8';

const { Header, Content, Footer, Sider } = Layout;

const siderStyle = {
    overflow: 'auto',
    height: '100vh',
    position: 'sticky',
    insetInlineEnd: 0, // Changed from `insetInlineStart` to `insetInlineEnd` to push to the right
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
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

const rawItems = [
    {
        key: '1',
        label: (
            <span>
                Dashboard <DashboardOutlined style={{ marginLeft: '29px' }} />
            </span>
        ),
        children: [
            { key: '1-1', label: 'Dashboard 1' },
            { key: '1-2', label: 'Dashboaed 2' },
            { key: '1-3', label: 'Dashboard 3' },
            { key: '1-4', label: 'Dashboard 4' },
            { key: '1-5', label: 'Dashboaed 5' },
            { key: '1-6', label: 'Dashboard 6' },
        ],
    },

    {
        key: '2',

        label: (
            <span>
                Overview <SlidersOutlined style={{ marginLeft: '40px' }} />
            </span>
        ),
    },

    {
        key: '3',

        label: (
            <span>
                Analytics <BarChartOutlined style={{ marginLeft: '45px' }} />
            </span>
        ),
    },

    {
        key: '4',

        label: (
            <span>
                Apps <AppstoreAddOutlined style={{ marginLeft: '67px' }} />
            </span>
        ),
        children: [
            { key: '2-1', label: 'Apps ...' },
            { key: '2-2', label: 'Sample Pages...' },

        ],
    },


    {
        key: '5',
        label: (
            <span>
                Widgets <WidgetsOutlinedIcon style={{ marginLeft: '49px', fontSize: 'medium' }} />
            </span>
        ),
        children: [
            { key: '3-1', label: 'Custom ...' },
            { key: '3-2', label: 'Maps ...' },
            { key: '3-3', label: 'Modals ...' },
        ],
    },

    {
        key: '6',
        label: (
            <span>
                Authentication <HttpsOutlinedIcon style={{ marginLeft: 8, fontSize: 'medium' }} />
            </span>
        ),
        children: [
            { key: '4-1', label: 'Login ...' },
            { key: '4-2', label: 'Register ...' },
            { key: '4-3', label: 'Lockscreen ...' },
            { key: '4-4', label: 'Recover Password ...' },
        ],

    },

    {
        key: '7',
        label: (
            <span>
                Miscellaneous <WarningAmberOutlinedIcon style={{ marginLeft: 9, fontSize: 'medium' }} />
            </span>
        ),
        children: [
            {
                key: '5-1', label: 'Error 404 ...'
            },
            { key: '5-2', label: 'Error 500 ...' },
            { key: '5-3', label: 'Maintenance ...' }
        ]

    },

    {
        key: '8',
        label: (
            <span>
                Features <FeaturedPlayListOutlinedIcon style={{ marginLeft: '45px', fontSize: 'medium' }} />
            </span>
        ),
        children: [
            { key: '6-1', label: 'card' },
            { key: '6-2', label: 'BS UI' },
            { key: '6-3', label: 'Icons' },
            { key: '6-4', label: 'Custom UI' },
            { key: '6-5', label: 'Components' },

        ],
    },

    {
        key: '9',
        label: (
            <span>
                Forms <ArticleOutlinedIcon style={{ marginLeft: '60px', fontSize: 'medium' }} />
            </span>
        ),
        children: [
            { key: '7-1', label: 'Form Element ...' },
            { key: '7-2', label: 'Form Layout ...' },
            { key: '7-3', label: 'Form Wizard ...' },
            { key: '7-4', label: 'Form Validation ...' },
            { key: '7-5', label: 'Formatter ...' },
            { key: '7-6', label: 'Xeditable Editor ...' },
            { key: '7-7', label: 'Dropzone ...' },
            { key: '7-8', label: 'Code Editor ...' },
            { key: '7-9', label: 'Editor ...' },
            { key: '7-10', label: 'Markdown ...' },

        ],
    },


    {
        key: '10',
        label: (
            <span>
                Charts <AccountTreeOutlinedIcon style={{ marginLeft: '59px', fontSize: 'medium' }} />
            </span>
        ),
        children: [
            { key: '8-1', label: 'ChartJS ...' },
            { key: '8-2', label: 'Flot ...' },
            { key: '8-3', label: 'Inline Charts ...' },
            { key: '8-4', label: 'Morries ...' },
            { key: '8-5', label: 'Peity ...' },
            { key: '8-6', label: 'Chartist ...' },
            { key: '8-7', label: 'Axis Chart ...' },
            { key: '8-8', label: 'Bar Chart ...' },
            { key: '8-9', label: 'Data Chart ...' },
            { key: '8-10', label: 'Pie & Doughnut Chart ...' },

        ],
    },


    {
        key: '11',
        label: (
            <span>
                Tables <BackupTableOutlinedIcon style={{ marginLeft: '59px', fontSize: 'medium' }} />
            </span>
        ),
        children: [
            { key: '9-1', label: 'Simple Table ...' },
            { key: '9-2', label: 'Data Tables ...' },
            { key: '9-3', label: 'Editable Tables ...' },
            { key: '9-4', label: 'Table Color ...' },


        ],
    },

];





const items = rawItems; // No mapping needed anymore


const App1 = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout hasSider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} >

                    <HeaderContent />

                </Header>
                {/* <Content style={{ margin: '24px 16px 0', overflow: 'initial' }} >
                    <div className='muigraphscontent'>
                       <div  style={{
                            padding: 24,
                            textAlign: 'center',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            width:'240px'
                        }}>

                            <Page1/>
                            

                       </div>

                       <div  style={{
                            padding: 24,
                            textAlign: 'center',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            width:'240px'
                        }}>

                            
                            <Page2/>

                       </div>
                    </div>
                </Content> */}

                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>

                        <div style={{
                            padding: 24,
                            textAlign: 'center',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            width: '240px',
                            height: '250px'
                        }}>
                            <Page1 />
                        </div>

                        <div style={{
                            padding: 24,
                            textAlign: 'center',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            width: '240px',
                            height: '250px'
                        }}>
                            <Page2 />
                        </div>

                        <div style={{
                            padding: 24,
                            textAlign: 'center',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            width: '240px',
                            height: '250px'
                        }}>
                            {/* <Page3 /> */}
                            <Page3 />
                        </div>

                        <div style={{
                            padding: 24,
                            textAlign: 'center',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            width: '240px',
                            height: '250px',
                            backgroundColor: '#8950fc'
                        }}>
                            {/* <Page4 /> */}
                            <Page4 />
                        </div>

                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginTop: '20px' }}>
                        <div style={{
                            padding: 24,
                            textAlign: 'center',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            width: '320px',
                            height: '380px'
                        }}>
                            <Page5 />

                        </div>

                        <div style={{
                            padding: 24,
                            textAlign: 'center',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            width: '686px',
                            height: '380px'
                        }}>
                            <Page6 />

                        </div>

                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginTop: '20px' }}>
                        <div style={{
                            padding: 24,
                            textAlign: 'center',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            width: '700px',
                            // height: '380px',
                            height: 'auto'
                        }}>
                            {/* <Page5/> */}
                            <Page7 />

                        </div>

                        <div style={{
                            padding: 24,
                            textAlign: 'center',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            width: '300px',
                            height: '380px'
                        }}>
                            {/* <Page6/> */}
                            <Page8/>

                        </div>

                    </div>

                </Content>


                {/* <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div className="muigraphscontent">
                        <div
                            className="muigraph-card"
                            style={{
                                padding: 24,
                                textAlign: 'center',
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                            }}
                        >
                            <Page1 />
                        </div>

                        <div
                            className="muigraph-card"
                            style={{
                                padding: 24,
                                textAlign: 'center',
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                            }}
                        >
                            <Page2 />
                        </div>
                    </div>
                </Content> */}

                <Footer style={{  }}>
                    {/* Ant Design ©{new Date().getFullYear()} Created by Ant UED */}
                    <div>
                        <div className='multiplethemes'>
                            <p className='purchase'> Purchase Now <span className='slash'> /</span> FAQ</p>
                            <p className='themes'>.<span className='multi'>Multipurpose Themes</span>. All Rights Reserved©{new Date().getFullYear()}</p>
                        </div>
                    </div>
                </Footer>
            </Layout>
            <Sider style={siderStyle}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
        </Layout>
    );
};

export default App1;
