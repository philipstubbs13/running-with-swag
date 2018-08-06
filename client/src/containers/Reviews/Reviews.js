// import React
import React, { Component } from 'react';
// import UI components from PrimeReact;
import { Button } from 'primereact/button';
// import css
import './Reviews.css';
// import reviews
import reviews from './reviews.json';

class Reviews extends Component {
  render() {
    return (
      <div className="reviews-container">
        <div className="reviews-header-container">
          <div className="reviews-page-header">
            <h1>Reviews</h1>
          </div>
          <div className="reviews-info">
            <p>
              Here you will find reviews of different running products
              I have purchased to help me train for upcoming races.
              I will also post reviews of races that I have personally run.
            </p>
            <p>
              Note that I am not getting paid to write these reviews. These
              reviews are based solely on purchases I have made and on my
              personal racing experiences.
            </p>
          </div>
        </div>
        <div className="reviews-content-container">
          {reviews.map(review => (
            <div className="review-card" key={review.id}>
              <h2 className="review-title">{review.title}</h2>
              <img src={review.image} className="review-image" alt={review.title} />
              <div className="review-text">{review.review}</div>
              <a href={review.link} target="_blank" rel="noopener noreferrer">
                <Button label={review.link_text} className="btn review-btn" />
              </a>
            </div>
          ))};
        </div>
      </div>
    );
  }
}

export default Reviews;
