import React, { useState } from "react";
import "./FoodSection.css"; 
import i1 from '../../assets/images/f1.png';
import i2 from '../../assets/images/f2.png';
import i3 from '../../assets/images/f3.png';
import i4 from '../../assets/images/f4.png';
import i5 from '../../assets/images/f5.png';
import i6 from '../../assets/images/f6.png';
import i7 from '../../assets/images/f7.png';
import i8 from '../../assets/images/f8.png';
import i9 from '../../assets/images/f9.png';
import d from '../../assets/images/delivery.png';

const FoodSection = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const menuItems = [
    { id: 1, category: "pizza", title: "Delicious Pizza", price: "$20", imgSrc: i1, description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" },
    { id: 2, category: "burger", title: "Delicious Burger", price: "$15", imgSrc: i2, description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" },
    { id: 3, category: "pizza", title: "Delicious Pizza", price: "$17", imgSrc: i3, description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" },
    { id: 4, category: "pasta", title: "Delicious Pasta", price: "$18", imgSrc: i4, description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" },
    { id: 5, category: "fries", title: "French Fries", price: "$10", imgSrc: i5, description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" },
    { id: 6, category: "pizza", title: "Delicious Pizza", price: "$15", imgSrc: i6, description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" },
    { id: 7, category: "burger", title: "Tasty Burger", price: "$12", imgSrc: i7, description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" },
    { id: 8, category: "burger", title: "Tasty Burger", price: "$14", imgSrc: i8, description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" },
    { id: 9, category: "pasta", title: "Delicious Pasta", price: "$10", imgSrc: i9, description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" },
  ];

  const filters = [
    { label: "All", value: "*" },
    { label: "Burger", value: "burger" },
    { label: "Pizza", value: "pizza" },
    { label: "Pasta", value: "pasta" },
    { label: "Fries", value: "fries" },
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section className="food_section layout_padding-bottom">
      <div className="container">
        <div className="head_sect">
          <h2>Our Menu</h2>
        </div>

        <ul className="filters_menu">
          {filters.map((filter) => (
            <li
              key={filter.value}
              className={activeFilter === filter.value ? "active" : ""}
              onClick={() => handleFilterClick(filter.value)}
            >
              {filter.label}
            </li>
          ))}
        </ul>

        <div className="filters-content">
          <div className="row grid">
            {menuItems
              .filter((item) => activeFilter === "*" || item.category === activeFilter)
              .map((item) => (
                <div key={item.id} className={`col-sm-6 col-lg-4 all ${item.category}`}>
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img src={item.imgSrc} alt={item.title} />
                      </div>
                      <div className="detail-box">
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                        <div className="options">
                          <h6>{item.price}</h6>
                          <a href="">
                            <img src={d} alt="Delivery" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="btn-box">
          <a href="">View More</a>
        </div>
      </div>
    </section>
  );
};

export default FoodSection;
