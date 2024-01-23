import React from 'react';
import PropTypes from 'prop-types'
import {BsBook} from 'react-icons/bs'
import {MdOutlinePriceChange} from 'react-icons/md'


const Course = ({ course,handleCourseName ,handlePrice,handleCredit}) => {
  const { id, course_name, course_details, price, credit, course_img } = course;
  return (
    <div  >
      <div className="card w-72 bg-base-100 shadow-xl mt-4">
        <figure>
          <img  className='m-2'src={course_img} alt="" />
        </figure>
        <div className="card-body">
          <h3 className="text-2xl ">{course_name}</h3>
          <p>{course_details}</p>
          <div className="card-actions justify-end">
          <div className='flex items-center '>
  <h3 className="text-xl flex items-center">
    <MdOutlinePriceChange />price <span>{price}</span>


  </h3>
  <h3 className="text-xl flex items-center ">
    <BsBook />credit <span key={id}>{credit}</span>
  </h3>
</div>

<button  onClick={()=>{
handleCourseName(course);
handlePrice(price);
handleCredit(credit)}}
className="btn btn-primary text-white w-1/2 mx-auto">Select</button>

          </div>
        </div>
      </div>
    </div>
  );
};

Course.propTypes={
    course:PropTypes.object
}
export default Course;
