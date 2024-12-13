import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import ContactHeading from '../../components/contacthead/ContactHeading';
import Banner from '../../components/contactbannner/Banner';
import Order from '../../components/contactorder/Order';
import ContactUs from '../../components/contactus/ContactUs';
import Booking from '../../components/contactbook/Booking';
import '../../components/contacthead/ContactHeading.css';

function Contact() {
  return (
    <div className="body4">
        <Navbar/>
        <ContactHeading/>
        <Banner/>
        <Order/>
        <ContactUs/>
        <Booking/>
        <Footer/>

    </div>
  )
}

export default Contact