import React from 'react';
import PropTypes from 'prop-types'


const CourseName = ({coursename,index}) => {
    const{course_name}=coursename;
    
    return (
        <div>
            
 <h3 className='text-xl'>{index}. {course_name}</h3>


            
        </div>
    );
};
CourseName.propTypes={
    coursename:PropTypes.object,
    index:PropTypes.number
 
}

export default CourseName;