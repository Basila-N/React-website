import React from 'react';
import s1 from '../../assets/images/fd18.jpg';
import s2 from '../../assets/images/fd22.jpg';
import s3 from '../../assets/images/icecream.jpg';
// import s4 from '../../assets/images/tranding-food-6.png';
import s5 from '../../assets/images/fd7.jpg';
import s6 from '../../assets/images/23-15g.png';
// import s7 from '../../assets/images/23-1g.png';
import s8 from '../../assets/images/2galry.png';
import './SimpleGallery.css';

const SimpleGallery = () => {
  return (
    <div className="container contr1">
      <h1 className="heading">
       Item Menu
      </h1>

      <div className="gallery">
        <div className="gallery-item">
          <img className="gallery-image" src={s1} alt="Description of the image 1" />
        </div>

        <div className="gallery-item">
          <img className="gallery-image" src={s2} alt="Description of the image 2" />
        </div>

        <div className="gallery-item">
          <img className="gallery-image" src={s3} alt="Description of the image 3" />
        </div>

        {/* <div className="gallery-item">
          <img className="gallery-image" src={s4} alt="Description of the image 4" />
        </div> */}

        <div className="gallery-item">
          <img className="gallery-image" src={s5} alt="Description of the image 5" />
        </div>

        <div className="gallery-item">
          <img className="gallery-image" src={s6} alt="Description of the image 6" />
        </div>

        {/* <div className="gallery-item">
          <img className="gallery-image" src={s7} alt="Description of the image 6" />
        </div> */}

        <div className="gallery-item">
          <img className="gallery-image" src={s8} alt="Description of the image 6" />
        </div>
      </div>
    </div>
  );
};

export default SimpleGallery;
