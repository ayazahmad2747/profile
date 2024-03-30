import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'
const Navbar = () => {
  const BarsIcon = <FontAwesomeIcon icon={faBars} />

  const [sidenav, setSidenav] = useState(false);
  const handleButton = ()=>{
    setSidenav(!sidenav)
  }
  return (
    <div>
      <div className="container nav_bar "
      data-aos="fade-down"
      data-aos-duration="1000" 
      >
        <div className="left nav_items">Ayaz Ahmad</div>

        <div className="right nav_toggler" onClick={handleButton}>
        {BarsIcon}
        </div>

        <div className= {` right ayaz ${sidenav === true ? 'active' : ''} `}>
        <a href="#home" className="nav_items">
        Home
      </a>
      <a href="#experience" className="nav_items">
        Experience
      </a>
      <a href="#skills" className="nav_items">
        Skills
      </a>
      <a href="#projects" className="nav_items">
        Projects
      </a>
      <a href="#About" className="nav_items">
        About
      </a>
      <a href="#contact" className="nav_items">
        Contact
      </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
