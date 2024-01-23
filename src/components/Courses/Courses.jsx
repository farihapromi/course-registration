import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import CourseNames from '../CourseNames/CourseNames';
import PropTypes from 'prop-types'

const Courses = ({handleCourseName,handleCredit,handlePrice}) => {
    const [courses,setCourses]=useState([])
    useEffect(()=>{
        fetch('course.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))

    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-2/3' >
          
            {
                courses.map(course=><Course
                key={course.id}
                course={course}
                handleCourseName={handleCourseName}
                handlePrice={handlePrice}
                handleCredit={handleCredit}
                
                ></Course>)
            }
              
            
        </div>
    );
};

Courses.propTypes={
    handleCourseName:PropTypes.func,
    handlePrice:PropTypes.func,
    handleCredit:PropTypes.func
}

export default Courses;