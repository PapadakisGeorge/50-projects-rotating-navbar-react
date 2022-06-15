import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import './NavBar.scss';


const NavBar = () => {
  return (
    <nav>
      <ul>
        <div>
        <li><i className="fa fa-home"></i>Home</li>
        <li><i className="fa fa-user"></i>About</li>
        <li><i className="fa fa-envelope"></i>Contact</li>
        </div>
      </ul>
    </nav>
  )
}

export default NavBar;