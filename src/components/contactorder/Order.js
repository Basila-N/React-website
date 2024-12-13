import React from 'react'
import './Order.css'

function Order() {
  return (
    <div>
        <section className="ftco-section img" id="order">
    <div className="container">
        <div className="row justify-content-center d-flex">
            <div className="col-md-7 ftco-animate makereservation p-4 px-md-5 pb-md-5">
                <div className="heading-section ftco-animate mb-5 text-center">
                    <span className="subheading">Order</span>
                    <h2 className="mb-4">Your Favorite Dish</h2>
                </div>
                <form action="#">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text" className="form-control" placeholder="Enter Name" id="name"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" placeholder="@gmail.com" id="email"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="address">Address</label>
                                <input type="text" className="form-control" placeholder="Enter address" id="address"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="phone">Phone</label>
                                <input type="text" className="form-control" placeholder="Enter PhNo" id="phone"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="order_date">Date</label>
                                <input type="date" className="form-control" id="order_date"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="order_time">Time</label>
                                <input type="time" className="form-control" id="order_time"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="dish">Dish Name</label>
                                <input type="text" className="form-control" placeholder="Enter Dish Name" id="dish"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="quantity">Quantity</label>
                                <input type="number" className="form-control" id="quantity" placeholder="Enter Quantity"/>
                            </div>
                        </div>
                        <div className="col-md-12 mt-3">
                            <div className="form-group text-center">
                                <input type="submit" value="Order Your Food" className="btn odr_buttn py-3 px-5 "/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Order