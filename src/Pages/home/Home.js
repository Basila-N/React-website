import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar/Navbar';
import Slider from '../../components/slider/Slider';
import About from '../../components/about/About';
import Counter from '../../components/counter/Counter';
import Feature from '../../components/feature/Feature';
import SimpleGallery from '../../components/simplegallery/SimpleGallery';
import Food from '../../components/foodsection/Food';
import Review from '../../components/review/Review';
import Footer from '../../components/footer/Footer';
import './home.css';


function Home() {
  return (
    <div className='body5'>
        <Navbar/>
        <Slider/>
        <About/>
        <Counter/>
        <Feature/>
        <SimpleGallery/>
        <Food/>
        <Review/>
        <Footer/>

    </div>
  )
}

export default Home