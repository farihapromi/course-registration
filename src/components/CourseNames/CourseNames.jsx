import {useState} from 'react';
import CourseName from '../CourseName/CourseName';
import PropTypes from 'prop-types'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



const CourseNames = ({coursenames,prices,credits}) => {
    const [showToast, setShowToast] = useState(false);

  const remainingCredit = Math.max(20 - credits, 0);

  // Function to handle the credit check
  const handleCreditCheck = () => {
    if (credits > 20) {
      toast.error('Credit hours are greater than 20.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000, 
      });
    }
  };
  
  
    
    return (
        <div className='md:w-1/3 bg-gray-200 ml-4 mt-2'>
                   {showToast && (
      <div id="toast-simple">
      {handleCreditCheck}
      </div>
    )}

            <h2 className="text-xl text-blue-500  
            border-b-2 border-gray-300 m-4 p-4"> Creadit Hour  Reaming  {remainingCredit} hr </h2>
           
            <h1 className="text-2xl  font-bold  py-4">Course name</h1>
            {
                coursenames.map(((coursename,idx)=>
                 <CourseName className='mb-4 p-4' key={idx}  index={idx+1} coursename={coursename}></CourseName>))
            }
            <br />
            <div className=' border-gray-300 border-b-2 m-2'>

            </div>
           
            <div>

            <h1 className="text-2xl  border-b-4  border-gray-300 m-2 p-4">Credit total :{credits}</h1>
            
        
            </div>
        
            <div>
            <h1 className="text-2xl   border-b-4  border-gray-300 m-2 p-4">Total  Price:{prices} USD</h1>
            </div>



           <ToastContainer/> 
        </div>
    );
};
CourseNames.propTypes={
    coursenames:PropTypes.array,
    prices:PropTypes.number,
    credits:PropTypes.number,
}

export default CourseNames;