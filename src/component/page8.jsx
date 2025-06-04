
import '../Css/page8.css';
import TimeChart from './pg8chart';


const Page8=()=>{
    return(
        <>
        <div>
            <div className='actbtn'>
                <button type="button" className='daybtn'>Days</button>
                <button type="button" className='hourbtn'>Hours</button>
                <h4 className='active'>Active Time</h4>
            </div>
            <TimeChart />
        </div>
        </>
    );
}

export default Page8;