
import '../Css/page5.css';
import SmoothCircularRadarChart from './pg5chart';
// import CircularRadarChart from './pg5chart';
// import CustomRadarChart from './pg5chart';

const Page5=()=>{
    return(
        <>

        <div>
            <div className='overview'>
                <button type="button" className="btn">View All</button>
                <h2 className='over'>Overview</h2>
            </div>
            {/* <CustomRadarChart/> */}
            {/* <CircularRadarChart/> */}
            <SmoothCircularRadarChart/>
        </div>

        </>
    );
}

export default Page5;