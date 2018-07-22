// import React
import React, { Component } from 'react';
// import UI components from PrimeReact.
import {Button} from 'primereact/button';
// import image
import Athlete from '../../images/athlete.jpg';
// import css
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <header class="showcase">
          <h1>Running with Swag</h1>
          <p>Your stop for running events, blog posts, reviews, tips, and more</p>
          <Button label="LEARN MORE" className="btn"/>
        </header>
        <div class="sidebar">
          Placeholder text
        </div>
      </div>
    );
  }
}

export default Home;
