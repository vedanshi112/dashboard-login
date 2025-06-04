
import '../Css/page6.css';
import YearDropdown from './dropdown';
import CustomBarChart from './pg6chart';


const Page6=()=>{
    return(
        <>
                <div>
                    <div className='growing'>
                        <div className='dropdownbutton'>
                            <button type="button" className="download">Download Report</button>
                            <YearDropdown/>
                        </div>
                        <div>
                            <h2 className='grow'>Growth</h2>
                        </div>
                    </div>
                    <CustomBarChart/>
                </div>

        </>
    );
}

export default Page6;