import React, { useState } from 'react'
import image from '../../villa.png'
import "../../index.css"
import { CiLocationOn } from "react-icons/ci";
import HoverContainer from '../model/hover-container/HoverContainer';
import person from "../../image/person.png"
import { BiMenu } from 'react-icons/bi';
import Model from '../model/normal-model/Model';

import dropDownArraow from "../../static/media/expand-more-grey.1614a6b8.svg"
import menu from "../../static/media/menu.abcac0a4.svg"


function NavBar() {
  const [isHoverd, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const [isModelOpen, setIsModelOpen] = useState(false);


  const style = {
    "display": isHoverd ? "block" : "none",
    "left": "20rem"

  }


  const onClickHandler = () => {
    setIsModelOpen(!isModelOpen);
  }
  return (
    <nav class="full-width-module__container___nCnbz full-width-module__containerPadding___jaFCY header-module__container___zI5wV" data-hidden="false">
      <a href="index.html" class="header-module__logoContainer___UeYMX" title="Lohono Stays">
        <img class="header-module__logo___5hqoT" src={image} alt="Lohono" />
      </a>
      <a href="index.html" class="header-module__header___L6WNx" title="Home" target="_self">Home</a>
      <div title="Villas on rent" class="header-module__headerDropdown___Nwy4D">Villas on rent <img src={dropDownArraow} alt="expand" />
      </div>
      <div title="Collections" class="header-module__headerDropdown___Nwy4D">Collections <img src={dropDownArraow} alt="expand" />
      </div>
      <div title="Rewards" class="header-module__headerDropdown___Nwy4D">Rewards <img src={dropDownArraow} alt="expand" />
      </div>
      <a href="experiences-and-events.html" class="header-module__header___L6WNx" title="Experiences and Events" target="_self">Experiences and Events</a>
      <a href="contact-us.html" class="header-module__header___L6WNx" title="Contact us" target="_self">Contact us</a>
      <div class="login-module__container___Uf3vo header-module__login___jk2F6 headerLogin">
        <img src="static/media/account-grey.d1fa58ba.svg" alt="account_icon" class="login-module__accountIcon___RndB0" />
        <button class="login-module__loginButton___ivrNm" type="button">Login / Sign Up</button>
      </div>
    </nav>
  )
}

export default NavBar