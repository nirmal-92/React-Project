
import React from 'react'
import {Link} from "react-router-dom"

export const Navbar=(props)=>{
    console.log(props)
    const handleClick=()=>{
        console.log(props.num+1)
        props.handleClick(props.num+1,"setname")

    }
    return (
      <nav className="navbar">
        <div className="navbar-logo">Website</div>
        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    );
  };
export default Navbar;
