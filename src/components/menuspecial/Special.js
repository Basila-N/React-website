import React from 'react'
import './Special.css';
import c1 from '../../assets/images/chin.png';
import c2 from '../../assets/images/chin1.png';
import c3 from '../../assets/images/chin2.png';
import c4 from  '../../assets/images/chin3.png';
import i1 from '../../assets/images/italian.png';
import i2 from '../../assets/images/italian1.png';
import i3 from '../../assets/images/italian3.png';
import i4 from '../../assets/images/italian4.png';
import s1 from '../../assets/images/spanish.png';
import s2 from '../../assets/images/spanish1.png';
import s3 from '../../assets/images/spanish2.png';
import s4 from '../../assets/images/spanish3.png'; 

function Special() {
  return (
    <div>
        <section className="ftco-section" id="menu">
    <div className="container-fluid px-4 menu_secn">
        <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-7 text-center heading-section ">
                <h2 className="mb-4">Special Items</h2>
            </div>
        </div>

        <div className="row">
                <div className="col-md-6 col-lg-4 menu-wrap">
                    <div className="heading-menu text-center ">
                        <h3>Chinese</h3>
                    </div>
                    <div className="menus d-flex ">
                        <div className="menu-img img" style={{backgroundImage: `url(${c1})` }} ></div>
                        <div className="text">
                            <div className="d-flex">
                                <div className="one-half">
                                    <h3>Soup</h3>
                                </div>
                                <div className="one-forth">
                                    <span className="price">₹400</span>
                                </div>
                            </div>
                            <p><span>Traditional chinese soup</span>
                            </p>
                        </div>
                    </div>
                    <div className="menus d-flex ">
                        <div className="menu-img img" style={{backgroundImage: `url(${c2})`}}></div>
                        <div className="text">
                            <div className="d-flex">
                                <div className="one-half">
                                    <h3>Yakisoba</h3>
                                </div>
                                <div className="one-forth">
                                    <span className="price">₹399</span>
                                </div>
                            </div>
                            <p><span>Chinese Special</span>
                            </p>
                        </div>
                    </div>
                    <div className="menus d-flex ">
                        <div className="menu-img img" style={{backgroundImage: `url(${c3})`}}></div>
                        <div className="text">
                            <div className="d-flex">
                                <div className="one-half">
                                    <h3>Dumpling</h3>
                                </div>
                                <div className="one-forth">
                                    <span className="price">₹500</span>
                                </div>
                            </div>
                            <p><span>Steam Dumpling</span>
                            </p>
                        </div>
                    </div>
                    <div className="menus d-flex ">
                        <div className="menu-img img" style={{backgroundImage: `url(${c4})`}}></div>
                        <div className="text">
                            <div className="d-flex">
                                <div className="one-half">
                                    <h3>Noodles</h3>
                                </div>
                                <div className="one-forth">
                                    <span className="price">₹500</span>
                                </div>
                            </div>
                            <p><span> shiitake mushrooms</span>, <span>vegetarian food udon noodles</span>
                            </p>
                        </div>
                    </div>
            </div>
            <div className="col-md-6 col-lg-4 menu-wrap">
                <div className="heading-menu text-center ">
                    <h3>Italians</h3>
                </div>
                <div className="menus d-flex ">
                    <div className="menu-img img" style={{backgroundImage: `url(${i1})`}}></div>
                    <div className="text">
                        <div className="d-flex">
                            <div className="one-half">
                                <h3>Risotto with seafood</h3>
                            </div>
                            <div className="one-forth">
                                <span className="price">₹450</span>
                            </div>
                        </div>
                        <p><span>mussels</span>, <span>octopuses</span>, <span>squid</span>
                        </p>
                    </div>
                </div>
                <div className="menus d-flex ">
                    <div className="menu-img img" style={{backgroundImage: `url(${i2})`}}></div>
                    <div className="text">
                        <div className="d-flex">
                            <div className="one-half">
                                <h3>meats grilling</h3>
                            </div>
                            <div className="one-forth">
                                <span className="price">₹400</span>
                            </div>
                        </div>
                        <p><span>sizzling meats grilling on the barbecue</span>
                        </p>
                    </div>
                </div>
                <div className="menus d-flex ">
                    <div className="menu-img img" style={{backgroundImage: `url(${i3})`}}></div>
                    <div className="text">
                        <div className="d-flex">
                            <div className="one-half">
                                <h3>Hot Shrimps</h3>
                            </div>
                            <div className="one-forth">
                                <span className="price">₹400</span>
                            </div>
                        </div>
                        <p><span>Hot</span>, <span>Shrimps</span>, <span>Meal</span>
                        </p>
                    </div>
                </div>
                <div className="menus d-flex ">
                    <div className="menu-img img" style={{backgroundImage: `url(${i4})`}}></div>
                    <div className="text">
                        <div className="d-flex">
                            <div className="one-half">
                                <h3>grilled chicken</h3>
                            </div>
                            <div className="one-forth">
                                <span className="price">₹400</span>
                            </div>
                        </div>
                        <p><span>meal of grilled chicken and fresh vegetables</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 menu-wrap">
                <div className="heading-menu text-center ">
                    <h3>Spanish</h3>
                </div>
                <div className="menus d-flex ">
                    <div className="menu-img img" style={{backgroundImage: `url(${s1})`}}></div>
                    <div className="text">
                        <div className="d-flex">
                            <div className="one-half">
                                <h3>seafood paella</h3>
                            </div>
                            <div className="one-forth">
                                <span className="price">₹400</span>
                            </div>
                        </div>
                        <p><span>spanish seafood paella</span>
                        </p>
                    </div>
                </div>
                <div className="menus d-flex ">
                    <div className="menu-img img" style={{backgroundImage: `url(${s2})`}}></div>
                    <div className="text">
                        <div className="d-flex">
                            <div className="one-half">
                                <h3>spanish food</h3>
                            </div>
                            <div className="one-forth">
                                <span className="price">₹400</span>
                            </div>
                        </div>
                        <p><span> food- tapas</span>, <span>paella</span>, <span> potato bravas </span>, <span>mussels</span>
                        </p>
                    </div>
                </div>
                <div className="menus d-flex ">
                    <div className="menu-img img" style={{backgroundImage: `url(${s3})`}}></div>
                    <div className="text">
                        <div className="d-flex">
                            <div className="one-half">
                                <h3>Colorful Seafood</h3>
                            </div>
                            <div className="one-forth">
                                <span className="price">₹400</span>
                            </div>
                        </div>
                        <p><span>Colorful Seafood Paella Dish with Shellfish</span>
                        </p>
                    </div>
                </div>
                <div className="menus d-flex ">
                    <div className="menu-img img" style={{backgroundImage: `url(${s4})`}}></div>
                    <div className="text">
                        <div className="d-flex">
                            <div className="one-half">
                                <h3>Spanish antipasto</h3>
                            </div>
                            <div className="one-forth">
                                <span className="price">₹400</span>
                            </div>
                        </div>
                        <p><span> shrimp</span>, <span>camembert</span>, <span> salmon and jamon </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="btn-box">
            <a href="">
            order
            </a>
        </div>
    </div>
</section>

    </div>
  )
}

export default Special