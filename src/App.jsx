import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Courses from './components/Courses/Courses'
import CourseName from './components/CourseName/CourseName'
import CourseNames from './components/CourseNames/CourseNames'

function App() {
  const [coursenames,setCourseName]=useState([]);
  const[prices,setPrices]=useState(0);
  const[credits,setCredits]=useState(0)
  
  const handleCourseName = (course) => {
    
    const isCourseSelected = coursenames.some((selectedCourse) => selectedCourse.id === course.id);
   
  
    if (isCourseSelected) {
      
      toast.error(' This Course already selected', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000, 
      });
     
    } else {
      
      const newCourseName = [...coursenames, course];
      setCourseName(newCourseName);
    }
  };

  //price
  const handlePrice=(price,id)=>{
    
    // const increaseCredit=coursenames.filter(coursename=>coursename.id!=id)
    setPrices(prices+price)


  }



  const handleCredit = (credit, id, course) => {
   
      setCredits(credits + credit);
    
  };
  
  
  
  

 
  return (
    <>
 
      <div className=' md:flex max-w-7xl mx-auto'>
        <Courses handleCourseName={handleCourseName} handlePrice={handlePrice}  
        handleCredit={ handleCredit}></Courses>

        <CourseNames coursenames={coursenames} 
         prices={prices} credits={credits} ></CourseNames>
        </div>
        <ToastContainer />
      
    </>
  )
}

export default App
