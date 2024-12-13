import React from 'react'
import './AboutUs.css';
import chef from '../../assets/images/chef.png';

function AboutUs() {
  return (
    <div>
         <div className="container-fluid abt_us">
        <div className="about_us row">
            <div className="ab_image col-md-4">
                <img src={chef} alt="Who We Are"/>
            </div>
            <div className="ab_text col-md-8">
                <h2 className="ab_heading text-center">Who We Are</h2>
                <p className="description">
                    At CHEF FOOD, we’re passionate about providing an exceptional dining experience. Our team of skilled chefs crafts each dish with care, using only the freshest, locally-sourced ingredients.
                    We blend traditional recipes with modern techniques to create a menu that delights the senses.
                    Our inviting atmosphere and attentive service make every visit memorable, whether you’re here for a casual meal or a special celebration.
                    Join us and experience the heart of culinary excellence.
                </p>
                <p className="description">
                    Discover the essence of fine dining, where every meal is a masterpiece. Join us for an unforgettable 
                    experience that nourishes both body and soul.
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutUs