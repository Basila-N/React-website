import React from 'react';
import './Slider.css';
import s1 from '../../assets/images/h11.jpg';
import s2 from '../../assets/images/h5.jpg';
import s3 from '../../assets/images/fd1.jpg';

function Slider() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
        
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExample" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExample" data-bs-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="banner">
              <img src={s2} alt="" />
            </div>
            <div className="carousel-caption">
              <h2 className="animate__animated animate__bounceInRight" style={{ animationDelay: '1s' }}>
                Fresh Flavors <span>Every Day</span>
              </h2>
              <h3 className="animate__animated animate__bounceInLeft" style={{ animationDelay: '2s' }}>
                Locally Sourced, Thoughtfully Prepared
              </h3>
              <p className="animate__animated animate__bounceInRight" style={{ animationDelay: '3s' }}>
                <a href="contact.html">Order</a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="banner">
              <img src={s1} alt="" />
            </div>
            <div className="carousel-caption">
              <h2 className="animate__animated animate__slideInDown" style={{ animationDelay: '1s' }}>
                Taste the <span>Tradition</span>
              </h2>
              <h3 className="animate__animated animate__fadeInUp" style={{ animationDelay: '2s' }}>
                Authentic Flavors, Crafted with Love
              </h3>
              <p className="animate__animated animate__zoomIn" style={{ animationDelay: '3s' }}>
                <a href="contact.html">Order</a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="banner">
              <img src={s3} alt="" />
            </div>
            <div className="carousel-caption">
              <h2 className="animate__animated animate__zoomIn" style={{ animationDelay: '1s' }}>
                From Farm <span>to Fork</span>
              </h2>
              <h3 className="animate__animated animate__fadeInLeft" style={{ animationDelay: '2s' }}>
                Where Local Ingredients Meet Creative Cuisine
              </h3>
              <p className="animate__animated animate__zoomIn" style={{ animationDelay: '3s' }}>
                <a href="contact.html">Order</a>
              </p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
