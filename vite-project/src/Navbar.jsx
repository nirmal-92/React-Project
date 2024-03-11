
import React, { useState } from 'react'
import {Link} from "react-router-dom"

export const Navbar=(props)=>{
    console.log(props)
    const[isLoggedIn, SetIsLoggedIn]=useState(false)
    const handleClick=()=>{
        // console.log(props.num+1)
        // props.handleClick(props.num+1,"setname")
        SetIsLoggedIn(!isLoggedIn)
    }
    return (
      <nav className="navbar">
        <div className="navbar-logo">Website</div>
        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <h1>{props.name}</h1>
          <h1>{props.num}</h1>
          <button onClick={handleClick}>{isLoggedIn?"LogOut":"Login"}</button>
        </ul>
      </nav>
    );
  };
export default Navbar;
