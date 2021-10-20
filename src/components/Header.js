import { faWeight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1 style={{color:"#fff",fontWeight:"lighter"}}>Hi, I'm </h1> <h1 style={{color:"#fff",fontWeight:"bolder"}}>Shahroz Hasan Khan</h1>
                <Typed 
                className="typed-text"
                strings={["I'm a ReactJS Developer.", "I'm a Front-End Web Developer.", "I'm a Javascript Developer."]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main"> Contact Me</a>
            </div>
        </div>
    )
}

export default Header
