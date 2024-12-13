import React from 'react'
import './Footer.css';
import inst1 from '../../assets/images/insta-1.jpg';
import inst2 from '../../assets/images/insta-2.jpg';
import inst3 from '../../assets/images/insta-3.jpg';
import inst4 from '../../assets/images/insta-4.jpg';
import inst5 from '../../assets/images/insta-5.jpg';
import inst6 from '../../assets/images/insta-6.jpg';

function Footer() {
  return (
    <div>
         <footer className="footer">
      <div className="container">
        <div className="footer-top row mb-5">
          {/* About Us Section */}
          <div className="col-md-6 col-lg-3">
            <div className="footer-column mb-4">
              <h3>About Us</h3>
              <p>Experience the best culinary delights with our premium food services.</p>
              <p>Delivering delicious, freshly prepared meals in a welcoming and friendly environment.</p>
              <h5>Follow Us</h5>
                <div className="social-icons">
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-twitter"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-6 col-lg-3">
            <div className="footer-column mb-4">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="menu.html">Our Menu</a>
                </li>
                <li>
                  <a href="about.html">Services</a>
                </li>
                <li>
                  <a href="gallery.html">Gallery</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="col-md-6 col-lg-3">
            <div className="footer-column mb-4">
              <h3>Contact Info</h3>
              <p>
                <i className="fa fa-map-marker"></i> 456 Market Street, City, Country
              </p>
              <p>
                <i className="fa fa-phone"></i> +123 456 789
              </p>
              <p>
                <i className="fa fa-envelope"></i> support@restaurant.com
              </p>
            </div>
          </div>

          {/* Instagram Section */}
          <div className="col-md-6 col-lg-3">
            <div className="footer-column instagram mb-4">
              <h3>Instagram</h3>
              <div className="thumb d-flex flex-wrap justify-content-center">
                <a
                  href="#"
                  className="thumb-menu ">
                    <img src={inst1} />
                  </a>
                <a
                  href="#"
                  className="thumb-menu ">
                    <img src={inst2} />
                </a>
                <a
                  href="#"
                  className="thumb-menu ">
                    <img src={inst3} />
                </a>
                <a
                  href="#"
                  className="thumb-menu ">
                    <img src={inst4} />
                </a>
                <a
                  href="#"
                  className="thumb-menu ">
                    <img src={inst5} />
                </a>
                <a
                  href="#"
                  className="thumb-menu ">
                    <img src={inst6} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2024 Restaurant Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer