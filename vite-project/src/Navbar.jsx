import React from 'react'
import {Link} from "react-router-dom"

export const Navbar = () => {
  return(
    <div className='navbar'>
        <ul>
            <li>
                <Link to="/">Website</Link>
            </li>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/services">Services</Link>
            </li>
            <li>
                <Link to="portfolio">Portfolio</Link>
            </li>
            <li>
                <Link to="contact">Contact</Link>
            </li>
        </ul>
    </div>
  )
}
export default Navbar;
