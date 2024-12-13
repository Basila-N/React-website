import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar/Navbar';
import AboutHeader from '../../components/aboutheader/AboutHeader';
import Footer from '../../components/footer/Footer';
import AboutUs from '../../components/aboutussection/AboutUs';
import ABoutFeatre from '../../components/aboutfeature/ABoutFeatre';
import AboutChef from '../../components/aboutchef/AboutChef';
import '../../components/aboutheader/AboutHeader.css';

function About() {
  return (
    <div className="body3">
        <Navbar/>
        <AboutHeader/>
        <AboutUs/>
        <ABoutFeatre/>
        <AboutChef/>
        <Footer/>
    </div>
  )
}

export default About