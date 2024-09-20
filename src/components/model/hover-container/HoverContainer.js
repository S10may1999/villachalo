import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import "./HoverContainer.css"


function HoverContainer(param) {
  return (
    <div className='hover-menu' style={param.style}>
        <div className='hover-heading'>Villas as per location</div>
        <div className='hover-content'>
          <div id="menu-options">
            <span><CiLocationOn/></span>
            <span>Villa in Karjat</span>
          </div>
          <div id="menu-options">
            <span><CiLocationOn/></span>
            <span>Villa in Karjat</span>
          </div>
          <div id="menu-options">
            <span><CiLocationOn/></span>
            <span>Villa in Karjat</span>
          </div>
          <div id="menu-options">
            <span><CiLocationOn/></span>
            <span>Villa in Karjat</span>
          </div>
        </div>
    </div>
  )
}

export default HoverContainer