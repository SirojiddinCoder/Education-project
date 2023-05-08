import React from "react";
import './Courses.css';
import CoursesImg from '../Icons/coursesLeft.svg';




const Courses = () =>{
    return(
        <>
          <div className="container">
           <div className="flex">
           <div className="courses_right">
                <h1 className="Find">Find Your Course That Makes Bright Future</h1>
                <p className="lorem1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at diam magnis faucibus et faucibus gravida.  malesuada fauci bus iaculis eu. Fusce est, consectetur tempor penatibus sed. Ut dolor, vulputate quam nec aliquam aliquam nisl. Auctor eros, iaculis quam nisi, 

                </p>
                <p className="lorem2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit. 

                </p>
                <div className="courses_btn">
                <a className="navbar_link nav_btn courses_btn" href="{link}">Learn More</a>
                </div>
            </div>
            <div className="courses_left">
              <img src={CoursesImg} alt="nimadir" />
            {/*  <video width="100%" height="100%" controls>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
 type="video/mp4"
  />
            </video> */}

            </div>
           </div>
           
          </div>
        </>
    )
}

export default Courses;