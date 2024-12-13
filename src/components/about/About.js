import React, { useEffect } from 'react';
import './About.css';
import ab from '../../assets/images/fd14.jpeg';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import the AOS CSS

function About() {
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []); // Empty dependency array to ensure it runs only once

  return (
    <div>
      <div className="container my-5 about_sec">
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-up-right">
            <img src={ab} alt="About Us" className="img-fluid rounded shadow" />
          </div>
          <div data-aos="fade-up-left" className="col-md-6 abt_cnt">
            <h2 className="display-4 mb-4">ABOUT US</h2>
            <p className="lead" style={{ color: '#FFCE1C' }}>
              Made of fresh & premium ingredients
            </p>
            <p>
              At <strong style={{ color: '#FFCE1C' }}>Chef Food</strong>, we believe in the joy of sharing great food made with love and passion. Our dishes are crafted from the freshest, highest-quality ingredients, offering a taste experience that celebrates both tradition and innovation. Whether you’re here for a quick bite or a full-course meal, we promise to make every visit memorable with flavors that delight and service that warms your heart.
            </p>
            <a href="about.html" className="btn sbtn_bttn mt-3">More About</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
