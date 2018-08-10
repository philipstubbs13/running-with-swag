// import React
import React, { Component } from 'react';
// import UI components from PrimeReact.
// import css
import './Races.css';
// import image
import runnerDude from '../../images/runner_dude.jpg';

class Races extends Component {
  render() {
    return (
      <div className="races-container">
        <div className="races-header">
          <h1>Race Stories</h1>
        </div>
        <div className="side">
        </div>
        <div className="main">
          <div className="race-content">
            <h1 className="race-post-title">Race title</h1>
            <p className="race-post-date">August 10, 2018</p>
            <img src={runnerDude} alt="runner dude" className="race-post-image" />
            <p className="race-post-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
          </div>
          <div className="race-content">
            <h1 className="race-post-title">Race title</h1>
            <p className="race-post-date">August 10, 2018</p>
            <img src={runnerDude} alt="runner dude" className="race-post-image" />
            <p className="race-post-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
          </div>
          <div className="race-content">
            <h1 className="race-post-title">Race title</h1>
            <p className="race-post-date">August 10, 2018</p>
            <img src={runnerDude} alt="runner dude" className="race-post-image" />
            <p className="race-post-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Races;
