import React from 'react'
import './Booking.css'

function Booking() {
  return (
    <div>
        <section className="table-booking-section">
    <div className="container bkg_tble">
        <h2 className="text-center mb-4">Book Your Table</h2>
        <form className="booking-form">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" required/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" required/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <label for="phone">Phone</label>
                        <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <label for="guests">Number of Guests</label>
                        <input type="number" className="form-control" id="guests" placeholder="Enter number of guests" required/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <label for="date">Date</label>
                        <input type="date" className="form-control" id="date" required/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <label for="time">Time</label>
                        <input type="time" className="form-control" id="time" required/>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group mb-3">
                        <label for="message">Additional Requests</label>
                        <textarea className="form-control" id="message" rows="4" placeholder="Any special requests?"></textarea>
                    </div>
                </div>
                <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </form>
    </div>
</section>
    </div>
  )
}

export default Booking