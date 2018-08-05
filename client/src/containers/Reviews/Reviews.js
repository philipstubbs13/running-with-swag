// import React
import React, { Component } from 'react';
// import UI components from PrimeReact;
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
// import css
import './Reviews.css';
// import reviews
import reviews from './reviews.json';

class Reviews extends Component {
  render() {
    return (
      <div className="reviews-container">
        <h1 className="reviews-page-header">Reviews</h1>
        {reviews.map(review => (
          <div className="review-card" key={review.id}>
            <h2 className="review-title">{review.title}</h2>
            <img src={`${review.image}`} alt={review.title} className="review-image" />
            <div className="review-text">{review.review}</div>
          </div>
        ))};
      </div>
    );
  }
}

export default Reviews;
