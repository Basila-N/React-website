import React from 'react'
import './GalleryImage.css';
import i1 from '../../assets/images/1galry.png';
import i2 from '../../assets/images/2galry.png';
import i3 from '../../assets/images/3galry.png';
import i4 from '../../assets/images/4galry.png';
import i5 from '../../assets/images/5galry.png';
import i6 from '../../assets/images/6galry.png';
import i7 from '../../assets/images/icecream.jpg';
import i8 from '../../assets/images/fd9.jpg';
import i9 from '../../assets/images/j2.jpg';
import i10 from '../../assets/images/fd22.jpg';
import i11 from '../../assets/images/cake.jpg';
import i12 from '../../assets/images/pizza.jpg';
import i13 from '../../assets/images/fd7.jpg';
import i14 from '../../assets/images/icecream4.jpg';
import i15 from '../../assets/images/desert2.jpg';
import i16 from '../../assets/images/wrap.jpg';
import i17 from '../../assets/images/j1.jpg';
import i18 from '../../assets/images/fd16.jpg';

function GalleryImage() {
  return (
    <div>
        <section id="gallary_sec">
        <div className="container">
            <h1>OUR GALLARY</h1>
            <div className="row" style={{ marginTop: '30px' }}>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <div className="overlay">
                            <h3 className="text-center">Green Tomatoes and Rocket on Herby French bread</h3>
                        </div>
                        <img src={i1} alt=""/>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <div className="overlay">
                            <h3 className="text-center">Bruschetta with chard spinach poached egg</h3>
                        </div>
                        <img src={i2} alt=""/>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <div className="overlay">
                            <h3 className="text-center">Seafood Paella Dish with Shellfish</h3>
                        </div>
                        <img src={i3} alt=""/>
                    </div>
                </div>
            </div>
  
  
            <div className="row" style={{ marginTop: '30px' }} >
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <div className="overlay">
                            <h3 className="text-center">Grilled Chicken Kebabs</h3>
                        </div>
                        <img src={i4} alt=""/>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <div className="overlay">
                            <h3 className="text-center">Grilled meals and fresh vegetables</h3>
                        </div>
                        <img src={i5} alt=""/>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <div className="overlay">
                            <h3 className="text-center">Jumbo Chicken Sandwich</h3>
                        </div>
                        <img src={i6} alt=""/>
                    </div>
                </div>
            </div>
  
            <div className="row" style={{ marginTop: '30px' }} >
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <div className="overlay">
                            <h3 className="text-center">cold chocolate and vanilla ice cream</h3>
                        </div>
                        <img src={i7} alt=""/>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <div className="overlay">
                            <h3 className="text-center">Green Tomatoes and Rocket on Herby French bread</h3>
                        </div>
                        <img src={i8} alt=""/>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <div className="overlay">
                            <h3 className="text-center">Lemon mojito with mint leaf</h3>
                        </div>
                        <img src={i9} alt=""/>
                    </div>
                </div>
            </div>
  
            <div className="row" style={{ marginTop: '30px' }} >
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <div className="overlay">
                            <h3 className="text-center">Shell fish on a black plate</h3>
                        </div>
                        <img src={i10} alt=""/>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <div className="overlay">
                            <h3 className="text-center">white chocolate and raspberry cake</h3>
                        </div>
                        <img src={i11} alt=""/>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <div className="overlay">
                            <h3 className="text-center">Delicious Pizza</h3>
                        </div>
                        <img src={i12} alt=""/>
                    </div>
                </div>
            </div>
  
            <div className="row" style={{ marginTop: '30px' }} >
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <div className="overlay">
                            <h3 className="text-center">Vegetarian salad with cherry tomato, mozzarella and lettuce</h3>
                        </div>
                        <img src={i13} alt=""/>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <div className="overlay">
                            <h3 className="text-center">waffles with berries and ice cream</h3>
                        </div>
                        <img src={i14} alt=""/>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <div className="overlay">
                            <h3 className="text-center">Choco delicious desert</h3>
                        </div>
                        <img src={i15} alt=""/>
                    </div>
                </div>
            </div>
  
            <div className="row" style={{ marginTop: '30px' }}>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <div className="overlay">
                            <h3 className="text-center">Chicken Wrap</h3>
                        </div>
                        <img src={i16} alt=""/>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <div className="overlay">
                            <h3 className="text-center">Fresh Fruit Juice</h3>
                        </div>
                        <img src={i17} alt=""/>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <div className="overlay">
                            <h3 className="text-center">Grilled burger </h3>
                        </div>
                        <img src={i18} alt=""/>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default GalleryImage