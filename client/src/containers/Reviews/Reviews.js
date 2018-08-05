// import React
import React, { Component } from 'react';
// import UI components from PrimeReact;
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
// import css
import './Reviews.css';
import bottle from '../../images/bottle.jpg';

class Reviews extends Component {
  render() {
    return (
      <div className="reviews-container">
        <h1 className="reviews-page-header">Reviews</h1>
        <div className="review-card">
          <h2 className="review-title">Neptune Bottle</h2>
          <img src={bottle} alt="neptune bottle" className="review-image" />
          <div className="review-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
        </div>

        <div className="review-card">
          <h2 className="review-title">Neptune Bottle 2</h2>
          <img src={bottle} alt="neptune bottle" className="review-image" />
          <div className="review-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
        </div>
      </div>
    );
  }
}

export default Reviews;
