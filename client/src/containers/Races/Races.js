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
        <h1 className="races-header">Races</h1>
        <div className="side">
          <img src={runnerDude} alt="runner dude" className="showcase" />
        </div>
        <div className="main">
          <div className="race-content">
            <h1>Race title</h1>
            <p>August 10, 2018</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
          </div>
          <div className="race-content">
            <h1>Race title</h1>
            <p>August 11, 2018</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Races;
