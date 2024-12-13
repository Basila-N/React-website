import React from 'react'
import './Feature.css';
import f1 from '../../assets/images/ficn1.png';
import f2 from '../../assets/images/ficn2.png';
import f3 from '../../assets/images/ficn3.png';

function Feature() {
  return (
    <div>
        
     <div className="container-fluid feature-section py-5">
        <div className="container">
            <h2 className="text-center mb-5">FEATURES</h2>
            <div className="row">
                <div className="col-md-6 col-lg-4 mb-4" data-aos="flip-left">
                    <div className="card cad1 h-100 text-center border-0 shadow">
                        <img src={f1} className="card-img-top mx-auto my-3" alt="Best Quality Food" style={{maxWidth: "50px"}}/>
                        <div className="card-body">
                            <h5 className="card-title">BEST QUALITY FOOD</h5>
                            <p className="card-text">Experience top-notch quality food made with the freshest ingredients and utmost care, designed to tantalize your taste buds.</p>
                            <a href="about.html" className="btn sbtn_bttn">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4" data-aos="flip-left">
                    <div className="card cad1 h-100 text-center border-0 shadow">
                        <img src={f2} className="card-img-top mx-auto my-3" alt="24/7 On Hotel" style={{maxWidth: "50px"}}/>
                        <div className="card-body">
                            <h5 className="card-title">24/7 ON HOTEL</h5>
                            <p className="card-text">We are open around the clock to serve you with our delightful dishes, whenever you crave.</p>
                            <a href="about.html" className="btn sbtn_bttn">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4" data-aos="flip-left">
                    <div className="card cad1 h-100 text-center border-0 shadow">
                        <img src={f3} className="card-img-top mx-auto my-3" alt="Easy to Order" style={{maxWidth: "50px"}}/>
                        <div className="card-body">
                            <h5 className="card-title">EASY TO ORDER</h5>
                            <p className="card-text">Order your favorite food in just a few clicks and get it delivered straight to your doorstep.</p>
                            <a href="about.html" className="btn sbtn_bttn">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </div>
  )
}

export default Feature