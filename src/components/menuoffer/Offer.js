import React from 'react'
import './Offer.css';
import o1 from '../../assets/images/o1.jpg';
import o2 from '../../assets/images/o2.jpg';
import o3 from '../../assets/images/offer.png';
import o4 from '../../assets/images/offer1.png';

function Offer() {
  return (
    <div>
        <section className="offer_section layout_padding-bottom">
        <div className="container">
            <div className="heading_container">
                <h2>Our Special Offers</h2>
            </div>
            <div className="offer_container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="box">
                            <div className="img-box">
                                <img src={o1} alt=""/>
                            </div>
                            <div className="detail-box">
                                <h5>Tasty Thursdays</h5>
                                <h6><span>20%</span> Off</h6>
                                <a href="contact.html">Order Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box">
                            <div className="img-box">
                                <img src={o2} alt=""/>
                            </div>
                            <div className="detail-box">
                                <h5>Pizza Days</h5>
                                <h6><span>15%</span> Off</h6>
                                <a href="contact.html">Order Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box">
                            <div className="img-box">
                                <img src={o3} alt=""/>
                            </div>
                            <div className="detail-box">
                                <h5>Choco Icecream</h5>
                                <h6><span>25%</span> Off</h6>
                                <a href="contact.html">Order Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box">
                            <div className="img-box">
                                <img src={o4} alt=""/>
                            </div>
                            <div className="detail-box">
                                <h5>Special Today</h5>
                                <h6><span>10%</span> Off</h6>
                                <a href="contact.html">Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Offer