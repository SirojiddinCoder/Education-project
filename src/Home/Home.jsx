import React from "react";
import './Home.css';
import Icon1 from '../Icons/IconOnline.svg'
import Icon2 from '../Icons/IconExpert.svg'
import Icon3 from '../Icons/IconSuccess.svg'



const Home = () =>{

    return(
        <>
        <div className="container-bg">
<div className="HomeImg">
    
        </div>
        <p className="Home_Title">
            Self-Paced Learning Courses Online
            </p>
            <p className="Home_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam elementum. Urna,
             posuere nisi sit gravida massa. Ultrices bibendum sagittis pellentesque vitae sit.

            </p>
            <div className="home_btn">
            <a className="navbar_link nav_btn home-btn" href="{link}">Start a coures</a>
            </div>
        </div>
        <div className="Icon_groups">

       <div className="box1">
      <div>
      <img src={Icon1}  alt="nimadir"/>
      </div>
      <div className="box_title">
      <p className="count">1400+</p>
       <span className="count_title">Online Courses</span>
      </div>
       </div>
       <div className="box1">
      <div>
      <img src={Icon2}  alt="nimadir"/>
      </div>
      <div className="box_title">
      <p className="count">1100+</p>
       <span className="count_title">Expert Instructors</span>
      </div>
       </div>
       <div className="box1">
      <div>
      <img src={Icon3}  alt="nimadir"/>
      </div>
      <div className="box_title">
      <p className="count">800+</p>
       <span className="count_title">Success Stories</span>
      </div>
       </div>
      
        </div>
        
        </>
    )
}
export default Home;