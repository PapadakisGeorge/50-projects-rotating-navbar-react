import React from "react";
import {FaTimes, FaBars} from 'react-icons/fa';
import './Circle.scss';

const Circle = (props) => {
  return (
     <div className="circle-container">
      <div className="circle">
        <button 
          id="close"
          onClick={() => props.updateDome()}
        >
          <FaTimes/>
        </button>
        <button 
          id="open"
          onClick={() => props.updateDome()}>
          <FaBars/> 
        </button>
      </div>
    </div>
  )
};

export default Circle;