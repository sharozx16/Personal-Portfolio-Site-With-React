import React,{ useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () =>{
    if (window.scrollY >= 650) {
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  }
 
  window.addEventListener('scroll',changeBackground);
    return (
        <nav className={navbar ?  "navbar act navbar-expand-lg fixed-top navbar-transparent" :  "navbar navbar-expand-lg fixed-top navbar-transparent"}>
        <div className="container">
        <a className="navbar-brand" href="#">  </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
           
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact Me</a>
            </li>      
          </ul>
       
        </div>
    </div>
      </nav>
    )
}

export default Navbar
