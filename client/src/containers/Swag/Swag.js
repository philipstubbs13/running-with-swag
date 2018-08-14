// import React
import React, { Component } from 'react';
// import UI components from PrimeReact;
import { Button } from 'primereact/button';
// import css
import './Swag.css';
// import reviews
import swag from './swag.json';

class Swag extends Component {
  render() {
    return (
      <div className="reviews-container">
        <div className="reviews-header-container">
          <div className="reviews-page-header">
            <h1>Swag</h1>
            <p>
              Here you will find reviews of different running products
              I have purchased to help me train for upcoming races.
            </p>
          </div>
        </div>
        <div className="reviews-content-container">
          {swag.map(item => (
            <div className="review-card" key={item.id}>
              <h2 className="review-title">{item.title}</h2>
              <img src={item.image} className="review-image" alt={item.title} />
              <div className="review-text">{item.review}</div>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Button label={item.link_text} className="btn review-btn" />
              </a>
            </div>
          ))};
        </div>
      </div>
    );
  }
}

export default Swag;
