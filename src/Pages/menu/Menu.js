import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar/Navbar'; 
import Footer from '../../components/footer/Footer';
import MenuHedaing from '../../components/menuhead/MenuHedaing';
import Offer from '../../components/menuoffer/Offer';
import FoodSection from '../../components/menufood/FoodSection';
import Special from '../../components/menuspecial/Special';
import '../../components/menuhead/MenuHeading.css';

function Menu() {
  return (
    <div className="body1">
        <Navbar/>
        <MenuHedaing/>
        <Offer/>
        <FoodSection/>
        <Special/>
        <Footer/>

    </div>
  )
}

export default Menu