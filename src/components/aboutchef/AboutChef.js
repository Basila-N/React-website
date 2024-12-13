import React from 'react'
import './AboutChef.css';
import img1 from '../../assets/images/chef3.png';
import img2 from '../../assets/images/chef1.png';
import img3 from '../../assets/images/chef2.png';
function AboutChef() {
  return (
    <div>
        <div className="ftco-section" id="chef">
        <div className="container">
            <div className="row justify-content-center mb-5 pb-2">
                <div className="col-md-12 text-center heading-section ftco-animate">
                    <h3 className="text-center mb-5">Our Master Chef</h3>
                </div>
            </div>
            <div className="row">
                
                <div className="col-md-4 col-lg-4 ftco-animate"> 
                    <div className="staff">
                        <div className="img" style={{backgroundImage: `url(${img1})`}}></div>
                        <div className="text pt-4">
                            <h3>Priya Sharma</h3>
                            <span className="position mb-2">Head Chef</span>
                            <p className="description">With years of experience, Priya specializes in creating innovative and delicious dishes that bring a modern twist to classNameic cuisines.</p>
                            <div className="social-icons">
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-twitter"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
    
                
                <div className="col-md-4 col-lg-4 ftco-animate">
                    <div className="staff">
                        <div className="img" style={{backgroundImage: `url(${img2})`}}></div>
                        <div className="text pt-4">
                            <h3>Nilay Hirpara</h3>
                            <span className="position mb-2">Co-Chef</span>
                            <p className="description">Nilay brings his visionary approach to the kitchen, blending tradition with creativity to craft unforgettable culinary experiences.</p>
                            <div className="social-icons">
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-twitter"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
    
               
                <div className="col-md-4 col-lg-4 ftco-animate">
                    <div className="staff">
                        <div className="img" style={{backgroundImage: `url(${img3})`}}></div>
                        <div className="text pt-4">
                            <h3>Ravi Kumawat</h3>
                            <span className="position mb-2">Head Chef</span>
                            <p className="description">Ravi is passionate about baking and crafting dishes that are not only delicious but also visually stunning, with attention to detail and flavor.</p>
                            <div className="social-icons">
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-twitter"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutChef