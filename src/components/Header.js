import React, { useState } from 'react';
import '../assets/header.css';
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-zwart.svg"
import icon from "../assets/images/icon-licht2.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const [showMenu, setShowMenu] = useState(false)


  let menu


  if (showMenu) {
    menu = <div>
      <ul className="mobile-menu">
        <li>
          <Link className="" to="/" onClick={() => setShowMenu(false)}>projecten</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setShowMenu(false)}>geschiedenis</Link>
        </li>
        <li>
          <Link className="" to="/contact" onClick={() => setShowMenu(false)}>contact</Link>
        </li>
      </ul>
    </div>

  }

  return (

    <div className="lg:container py-5 px-5 mx-auto">
      <div className="nav-container mx-auto container grid grid-cols-2 lg:grid-cols-3 ">
        <div className="logo ">
          <a href="/">
            <img src={logo} alt="logo-zwart"></img>
          </a>
        </div>
        <div className="icon mx-auto hidden lg:flex flex-1">
          <img src={icon} alt="icon-licht"></img>
        </div>

        <div className="topnav">
          <ul className="desktop-menu hidden md:flex flex-1 justify-end">
            <li>
              <Link className="" to="/">projecten</Link>
            </li>
            <li>
              <Link to="/about">geschiedenis</Link>
            </li>
            <li>
              <Link className="" to="/contact">contact</Link>
            </li>
          </ul>

          <div className="hamburger flex md:hidden flex-1 justify-end">
            <span className="text-2xl cursor-pointer z-50 inactive">
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => setShowMenu(!showMenu)}
              />
            </span>

            {menu}

          </div>
        </div>

      </div>
    </div>

  );
}

export default Header;
