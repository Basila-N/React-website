import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import GalleryHeading from '../../components/galleryhead/GalleryHeading';
import GalleryImage from '../../components/galleryimage/GalleryImage';
import Restaurent from '../../components/galleryrest/Restaurent';
import '../../components/galleryhead/GalleryHeading.css';

function Gallery() {
  return (
    <div className="body2">
        <Navbar/>
        <GalleryHeading/>
        <GalleryImage/>
        <Restaurent/>
        <Footer/>

    </div>
  )
}

export default Gallery