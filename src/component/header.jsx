import '../Css/header.css';
import TimelineTwoToneIcon from '@mui/icons-material/TimelineTwoTone';
import Person2TwoToneIcon from '@mui/icons-material/Person2TwoTone';
import CropFreeTwoToneIcon from '@mui/icons-material/CropFreeTwoTone';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import LocalActivityTwoToneIcon from '@mui/icons-material/LocalActivityTwoTone';
import EditCalendarTwoToneIcon from '@mui/icons-material/EditCalendarTwoTone';
import LibraryAddCheckTwoToneIcon from '@mui/icons-material/LibraryAddCheckTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import MessageTwoToneIcon from '@mui/icons-material/MessageTwoTone';
import FormatAlignRightTwoToneIcon from '@mui/icons-material/FormatAlignRightTwoTone';

import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';  // If you use React Router

const HeaderContent = () => {
    const navigate = useNavigate(); // For navigation after logout (optional)

    const handleLogout = () => {
        if(window.confirm("Are you sure you want to logout?")) {
            // Clear user data/session storage/local storage or call logout API here
            localStorage.clear(); // Example: clearing local storage
            alert("Logout successful");
            // Redirect to login page if using React Router
            navigate('/'); 
        }
    };

    return (
        <>
            <div className='social'>
                <div className='notification'>
                    <TimelineTwoToneIcon  className='timeline'/>
                    
                    {/* Logout icon with onClick */}
                    <Person2TwoToneIcon 
                      className='timeline' 
                      style={{cursor: 'pointer'}} 
                      onClick={handleLogout} 
                      titleAccess="Logout"
                    />

                    <NotificationsNoneTwoToneIcon className='timeline'/>

                    <Input 
                      size="large" 
                      placeholder="Search .." 
                      prefix={<SearchOutlined />} 
                      style={{width:'200px',height:'30px', marginTop:'-5px'}}
                    />

                    <CropFreeTwoToneIcon className='timeline' />
                </div>
                <div className='medias'>
                    <LocalActivityTwoToneIcon className='timeline' />
                    <EditCalendarTwoToneIcon className='timeline' />
                    <LibraryAddCheckTwoToneIcon  className='timeline'/>
                    <EmailTwoToneIcon className='timeline' />
                    <MessageTwoToneIcon className='timeline'/>
                    <FormatAlignRightTwoToneIcon className='timeline' />
                </div>
            </div>
        </>
    );
}

export default HeaderContent;
