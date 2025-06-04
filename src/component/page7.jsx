
import '../Css/page7.css';

// import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';


import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
// import BasicTable from './table';
import DataTable from './table';

const Page7=()=>{
    return(
        <>
        <div>
            <div className='newuser1'>
                     <Input size="small" placeholder="" prefix={<SearchOutlined />} style={{width:'50px',borderRadius:'20px', backgroundColor:'#f2f2f5',height:'30px'}} />
                     <h3 className='newuser'>New Users</h3>
            </div>
        </div>

        {/* <div>
            <table>
                <thead>
                    <th>Action</th>
                    <th>Country</th>
                    <th>FAte</th>
                    <th>Status</th>
                    <th>Details</th>
                    <th>Users</th>
                </thead>
                <tbody>
                    <tr>
                        <td><span><EditNoteOutlinedIcon className='editnote'/><br /><DeleteOutlineOutlinedIcon className='delete'/></span></td>
                        <td style={{fontSize:'22px'}}>CH</td>
                        <td><span className='sep'>Sep <AccessTimeOutlinedIcon className='clock'/><br />16, <br />2024   </span></td>
                        <td><button type="button" className='inac'>Inactive</button></td>
                        <td><span>#1 <br />Testing</span></td>
                        <td><span className='john'>John Doe</span><br /><span className='mails'>johndoe@example.com</span></td>
                    </tr>
                </tbody>
            </table>
        </div> */}
        {/* <BasicTable/> */}
        <DataTable/>
       
        </>
    );
}

export default Page7;