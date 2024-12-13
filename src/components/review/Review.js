import React from 'react'
import './Review.css';
import m from '../../assets/images/man.jpg';
import g1 from '../../assets/images/girl.webp';
import g2 from '../../assets/images/girl2.jpeg';

function Review() {
  return (
    <div>
        <section className="reviews-page">
    <div className="container">
        <h1 className="text-center mb-4">Customer Reviews</h1>
        <div className="review-cotnr">
            <div className="card reviewcard">
                <div className="review-header">
                    <img src={g1} className="review-img" alt="Reviewer 1"/>
                    <h5 className="review-title">Sharaya Anil</h5>
                </div>
                <p className="review-text">"An amazing experience! The trip was well-organized and the guides were incredibly knowledgeable. Highly recommend!"</p>
                <div className="review-rating">
                    <span className="star-rating">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                    </span>
                </div>
            </div>
            <div className="reviewcard card">
                <div className="review-header">
                    <img src={m} className="review-img" alt="Reviewer 2"/>
                    <h5 className="review-title">Sunil Kumar</h5>
                </div>
                <p className="review-text">"Fantastic service and beautiful destinations. Everything was perfect from start to finish. Will definitely book again!"</p>
                <div className="review-rating">
                    <span className="star-rating">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                        <i className="bi bi-star"></i>
                    </span>
                </div>
            </div>
            <div className="reviewcard card">
                <div className="review-header">
                    <img src={g2} className="review-img" alt="Reviewer 3"/>
                    <h5 className="review-title">Alice Jhon</h5>
                </div>
                <p className="review-text">"A wonderful experience! The accommodations were top-notch and the itinerary was well-planned. Five stars!"</p>
                <div className="review-rating">
                    <span className="star-rating">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Review