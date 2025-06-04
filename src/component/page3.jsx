
import '../Css/page3.css';

import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import TinyGreenChart from './pg3chart';

const Page3 = () => {
    return (
        <>
            <div>
                <div className='border1'>
                    <h2 className='visit1'>Total <br />Visitors</h2>
                    <div className='visitors'>
                        <PeopleAltOutlinedIcon className='Visitors1' />
                    </div>
                </div>
                <div>
                    <h1 className='million1'>6.25M</h1>
                </div>
                <div>
                    <h5 className='vs'>vs Last Month <span className='percentage1'>25% <ArrowUpwardOutlinedIcon className='arrow1' /></span> </h5>
                </div>
                {/* <SmoothAreaChart/> */}
                {/* <TinyLineChart/> */}
                {/* <SmoothAreaChart/> */}
                <TinyGreenChart/>
            </div>
        </>
    );
}

export default Page3;