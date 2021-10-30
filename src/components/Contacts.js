import React, {useEffect} from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Contacts = () => {
    useEffect(() => {
        Aos.init({duration: 1200});
    }, []);
    return (
        <div className="contacts" id="contact">
            <div className="text-upper">
            <h1 data-aos="fade-down" data-aos-easing="ease-out-back"  data-aos-anchor-placement="bottom-bottom">Contact Me</h1>
            <p data-aos="slide-right" data-aos-easing="ease-out-back"  data-aos-anchor-placement="center-bottom"> Fill out the form to get in contact.</p>
            </div>
            <div data-aos="zoom-in" data-aos-easing="ease-out-back"  data-aos-anchor-placement="center-bottom" className="container">
                <div className="row">
                  <div className="col-md-6 col-xs-12">
                     <div className="text-center">             
                      <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      />
                      <div className="line"></div>
                      </div>
                      <div className="text-center">
                            <input
                     type="number"
                      className="form-control"
                      placeholder="Phone Number"
                      phone="phone"
                      />
                       <div className="line"></div>
                       </div>
                       <div className="text-center">
                            <input
                        type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      />
                       <div className="line"></div>
                       </div>
                       <div className="text-center">
                            <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="suject"
                      />
                       <div className="line"></div>
                       </div>
                      </div>  
                      <div className="col-md-6 col-xs-12">
                      <div className="text-center">
                      <textarea type="text" className="form-control" placeholder="Description" description="description"></textarea>
                       <div className="line"></div>
                       </div>
                      <button className="btn-contact">Contact Me</button>
                      </div>
                </div>
            </div>
            
        </div>
    )
}

export default Contacts
