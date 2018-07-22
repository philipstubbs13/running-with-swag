// import React
import React, { Component } from 'react';
// import UI components from PrimeReact
import { Fieldset } from 'primereact/fieldset';
// import css
import './About.css';
// import image
import Runner from '../../images/runner_bridge.jpg';

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-image-div">
          <img src={ Runner } alt="runner stretching on bridge" className="about-image" />
        </div>
        <Fieldset legend="About this site" className="about-content">
          The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
          His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
          Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
          kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
        </Fieldset>   
      </div>
    );
  }
}

export default About;
