
import React, { useEffect } from 'react';
import Typed from 'react-typed';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Header = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
    return (
        <div className="header-wrapper">
            <div data-aos="fade-up" data-aos-easing="ease-in-out"    data-aos-easing="ease-in" className="main-info">
                <h4 style={{color:"#fff"}}>Hi, I'm </h4> <h1 style={{color:"#fff",fontWeight:"bolder"}}>Shahroz Hasan Khan</h1>
                <Typed 
                className="typed-text"
                strings={["I'm a ReactJS Developer.", "I'm a Front-End Web Developer.", "I'm a Javascript Developer."]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#contact" className="btn-main"> Contact Me</a>
            </div>
        </div>
    )
}

export default Header
