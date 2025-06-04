
import '../Css/page4.css';

import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import TinyPurpleChart from './pg4chart';


const Page4=()=>{
    return(
        <>
        {/* <div>
            <div className='follow2'>
                <h2 className="follow">New <br />Followers</h2>
                <Person3OutlinedIcon className='follow1'/>
            </div>
            <h1 className='million4'>4.5M</h1>
        </div> */}
        <div>
                        <div className='border1'>
                            <h2 className='total'>New <br />Followers</h2>
                            <div className='follow1'>
                                <Person3OutlinedIcon className='follow' />
                            </div>
                        </div>
                        <div>
                            <h1 className='million4'>4.5M</h1>
                        </div>
                        <div>
                            <h5 className='vs4'>vs Last Month <span className='percentage4'>25% <ArrowUpwardOutlinedIcon className='arrow4' /></span> </h5>
                        </div>
                        {/* <SmoothAreaChart/> */}
                        {/* <TinyLineChart/> */}
                        {/* <SmoothAreaChart/> */}
                        <TinyPurpleChart/>
                    </div>
        </>
    );
}

export default Page4;