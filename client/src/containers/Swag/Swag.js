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
          {swag.map(swag => (
            <div className="review-card" key={swag.id}>
              <h2 className="review-title">{swag.title}</h2>
              <img src={swag.image} className="review-image" alt={swag.title} />
              <div className="review-text">{swag.review}</div>
              <a href={swag.link} target="_blank" rel="noopener noreferrer">
                <Button label={swag.link_text} className="btn review-btn" />
              </a>
            </div>
          ))};
        </div>
      </div>
    );
  }
}

export default Swag;
