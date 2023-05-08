import React from "react";
import  './Navbar.css';

const Navbar = () =>{

return(
    <>
    <div className="header">
        <div className="navbar">
        <div className="Logo">
            <a className="navbar_link logo" href="{link}">Education</a>
         
            </div>
  <div className="nav_link">
            <a className="navbar_link active" href="{link}">Home </a>
            <a className="navbar_link" href="{link}">Courses</a>
            <a className="navbar_link" href="{link}">Page</a>
            <a className="navbar_link" href="{link}">Blog</a>
            <a className="navbar_link" href="{link}">Contact</a>
  </div>
  <div className="signIn">
  <a className="navbar_link" href="{link}">Sing In</a>
  <a className="navbar_link nav_btn" href="{link}">Sing Up</a>
  </div>
        </div>
       
    </div>

    
    </>
)

}

export default Navbar;