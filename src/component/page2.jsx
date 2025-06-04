
import '../Css/page2.css';

import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import TinySmoothChart from './pg2chart';
// import TinyLineChart from './pg2chart';
// import SmoothAreaChart from './pg2chart';

const Page2=()=>{
    return(
        <>
            <div>
                <div className='border'>
                    <h2 className='chat'>Chat</h2>
                    <div className='chatout1'>
                            <ChatOutlinedIcon className='chatout'/>
                    </div>
                </div>
                <div>
                    <h1 className='million'>2M</h1>
                </div>
                <div>
                    <h5 className='vs'>vs Last Month <span className='percentage'>25% <ArrowDownwardIcon className='arrow'/></span> </h5>
                </div>
                {/* <SmoothAreaChart/> */}
                {/* <TinyLineChart/> */}
                {/* <SmoothAreaChart/> */}
                <TinySmoothChart/>
                
            </div>

        </>
    );
}

export default Page2;