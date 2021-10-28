import React from 'react'

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="text-upper">
            <h1>Contact Me</h1>
            <p> Fill out the form to get in contact.</p>
            </div>
            <div className="container">
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
                      <textarea
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      description="description"
                      > </textarea>
                       <div className="line"></div>
                       </div>
                      <button className="btn-main btn-contact">Contact Me</button>
                      </div>
                </div>
            </div>
            
        </div>
    )
}

export default Contacts
