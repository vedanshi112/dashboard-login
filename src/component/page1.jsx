
import '../Css/page1.css';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import PieChartWithCenterLabel from './pg1chart';

const Page1=()=>{
    return(
        <>
            <div>
                <div className='more'>
                    <MoreVertIcon/>
                    <h2 className='analy'>Analytics</h2>
                </div>
                <PieChartWithCenterLabel/>
            </div>
        </>
    );
}

export default Page1;