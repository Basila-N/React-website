import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div>
        <div className="container-fluid" id="contact">
    <h1>CONTACT US</h1>
    <div className="row">
        <div className="col-md-4 py-1 py-md-0">
            <div className="form-group">
                <input type="text" className="form-control" id="usr" placeholder="Name" required/>
            </div>
        </div>
        <div className="col-md-4 py-1 py-md-0">
            <div className="form-group">
                <input type="email" className="form-control" id="eml" placeholder="Email" required/>
            </div>
        </div>
        <div className="col-md-4 py-1 py-md-0">
            <div className="form-group">
                <input type="tel" className="form-control" id="phn" placeholder="Phone" required/>
            </div>
        </div>
    </div>
    <div className="form-group">
        <textarea className="form-control" rows="5" id="comment" placeholder="Message" required></textarea>
    </div>
    <div id="messagebtn">
        <button className="btn btn-send">Send Message</button>
    </div>
</div>
    </div>
  )
}

export default ContactUs