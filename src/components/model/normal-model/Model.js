import React, { useState } from 'react'
import "./Model.css"
import logo from "../../../villa.png"
import { MdOutlineCancel } from "react-icons/md";

function Model() {
    const [crossClicked,setCrossClicked]=useState("");

    const clickHandler=()=>{
        setCrossClicked("none");
    }
  return (
    <div className='modelContainer' style={{"display":`${crossClicked}`}}>
        <div className='modelMain'>
        <div className='title'>
            <img src={logo} />
            <span onClick={clickHandler}><MdOutlineCancel/></span>
        </div>
        <hr/>
        <div className='heading'>
            Login/Create Account
        </div>
        <div className='mainContent'>
            <span>Enter Your Phone Number To Continue</span>
            <div id='inptBox'>
                <select>
                    <option>+91 India</option>
                    <option>+1 America</option>
                    <option>+82 France</option>
                    <option>+108 Germany</option>
                </select>
                <input type='text' required placeholder='Enter Mobile Number'/>  
            </div>
            <div id='sentBtn'>
                Send OTP
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default Model