import React from 'react';

const About = () => {
    return (
        <div className="about">
            <h1>About Me</h1>
            <div className="container">
              <div className="myworks">
                  <div className="col-2 first">
                   <div className="firstlogo logo"></div>
                   <p>HTML5</p>
                  </div>
                  <div className="col-2 first">
                <div className="secondlogo logo"></div>
                <p>CSS3</p>

                </div>
                <div className="col-2 first">
                <div className="thirdlogo logo"></div>
                <p>JAVASRCIPT</p>

                </div>
                <div className="col-2 first"> 
                <div className="fourthlogo logo"></div>
                <p>REACT</p>

                </div>
              </div>
              <div className="myworks">
                  <div className="col-2 first">
                   <div className="fifthlogo logo"></div>
                   <p>BOOTSTRAP</p>
                  </div>
                  <div className="col-2 first">
                <div className="sixthlogo logo"></div>
                <p>MATERIAL UI</p>

                </div>
                <div className="col-2 first">
                <div className="seventhlogo logo"></div>
                <p>FIGMA</p>

                </div>
                <div className="col-2 first">
                <div className="eightlogo logo"></div>
                <p>FIREBASE</p>

                </div>
              </div>
                
            </div>
            <div className="container">
                <div className="aboutme">
                  <p>I'm a front-end ReactJS Developer and a student soon to be graduated from a reputable university. I've worked in web development for over 1+ years and I also have a know how of React Native. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
                </div>
            </div>
            
        </div>
    )
}

export default About
