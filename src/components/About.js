import React,{ useEffect} from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

const About = () => {
  useEffect(() => {
    Aos.init({duration: 1200});
}, []);
    return (

        <div className="about" id="about">
            <h1 data-aos="fade-down" data-aos-easing="ease-out-back"  data-aos-anchor-placement="bottom-bottom" >About</h1>
            <div className="container">
              <div data-aos="fade-left" data-aos-easing="ease-out-back" data-aos-placement="center-center" className="myworks">
                  <div className="col-2 first">
                   <div className="firstlogo logo"></div>
                   <h4>HTML5</h4>
                  </div>
                  <div className="col-2 first">
                <div className="secondlogo logo"></div>
                <h4>CSS3</h4>

                </div>
                <div className="col-2 first">
                <div className="thirdlogo logo"></div>
                <h4>JAVASRCIPT</h4>

                </div>
                <div className="col-2 first"> 
                <div className="fourthlogo logo"></div>
                <h4>REACT</h4>

                </div>
              </div>
              <div data-aos="fade-right" data-aos-easing="ease-out-back"  data-aos-placement="center-center"className="myworks">
                  <div className="col-2 first">
                   <div className="fifthlogo logo"></div>
                   <h4>BOOTSTRAP</h4>
                  </div>
                  <div className="col-2 first">
                <div className="sixthlogo logo"></div>
                <h4>MATERIAL UI</h4>

                </div>
                <div className="col-2 first">
                <div className="seventhlogo logo"></div>
                <h4>FIGMA</h4>

                </div>
                <div className="col-2 first">
                <div className="eightlogo logo"></div>
                <h4>FIREBASE</h4>

                </div>
              </div>
                
            </div>
            <div className="container">
            <h3 style={{textAlign:"center",margin:"0"}}>About Myself</h3>

                <div data-aos="fade" data-aos-easing="ease-in-out"  data-aos-placement="top-center" className="aboutme">
                  <p>Hey, I'm Shahroz! a Front-End ReactJS and Javascript Developer.
                     I've been in the Web Development enviroment for about 2 years, working in all kinds of front end websites, dashboards and
                     applications. I'm very passionate about solving problems through my skills. One important trait that I have is that 
                     I absolutely love learning new things and improve my skillset. Currently I'm looking forward to learning Web3.js and Node.js.
                     </p>
                </div>
            </div>
            <div className="container">
                <div  className="socialmedia ">
                    <div  data-aos="zoom-in" data-aos-easing="ease-out-back"  data-aos-placement="top-center" className="socialicon">
                   <a href="https://github.com/sharozx16"> <span className="fa fa-github fa-3x" style={{color:"white"}}></span></a>
                    </div>
                    <div   data-aos="zoom-in" data-aos-easing="ease-out-back"  data-aos-placement="top-center"className="socialicon">
                    <a href="https://www.facebook.com/iSharozKhan/"> <span className="fa fa-facebook fa-3x" style={{color:"white"}}></span> </a>        
                        </div>
                        <div   data-aos="zoom-in" data-aos-easing="ease-out-back"  data-aos-placement="top-center"className="socialicon">
                      <a href="https://www.linkedin.com/in/shahrozkhan20/" target="_blank"><span className="fa fa-linkedin fa-3x" style={{color:"white"}}></span></a>
                        </div>
                        <div   data-aos="zoom-in" data-aos-easing="ease-out-back"  data-aos-placement="top-center"className="socialicon">
                        <a href="mailto:sharozx16@gmail.com" target="_blank"><span className="fa fa-envelope fa-3x" style={{color:"white"}}></span></a>
                        </div>
                </div>
                <div className="socialmedia">
                <button className="btn btn-outline-primary btn-lg">Download Resume</button>
                </div>
                
            </div>
        </div>
    )
}

export default About
