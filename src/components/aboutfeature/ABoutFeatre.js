import React from 'react'
import './AboutFeatre.css';
import img1 from '../../assets/images/fd14.jpeg';
import img2 from '../../assets/images/ab1.jpg';
import img3 from '../../assets/images/ab2.jpg';

function ABoutFeatre() {
  return (
    <div>
        <div className="abt_crd">
        <div className="abt_hed1">
            <h3 className="text-center mb-5">Our Qualities</h3>
        </div>
        <div className="card__container">
           <article className="card__article">
              <img src={img1} alt="image" className="card__img"/>

              <div className="card__data">
                 <span className="card__description">BEST QUALITY FOOD</span>
                 <p className="card__title">Experience the finest quality food crafted with passion and precision, using only the freshest ingredients for a truly exceptional dining experience.</p>
              </div>
           </article>

           <article className="card__article">
              <img src={img2} alt="image" className="card__img"/>

              <div className="card__data">
                 <span className="card__description">24/7 ON HOTEL</span>
                 <p className="card__title">Open 24/7 to serve you anytime, day or night, with our exceptional quality food and service.</p>
              </div>
           </article>

           <article className="card__article">
              <img src={img3} alt="image" className="card__img"/>

              <div className="card__data">
                 <span className="card__description">EASY TO ORDER</span>
                 <p className="card__title">Enjoy hassle-free ordering with our easy and convenient service, available at your fingertips</p>
              </div>
           </article>
        </div>
     </div>
    </div>
  )
}

export default ABoutFeatre