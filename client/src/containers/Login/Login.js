// import React
import React, { Component } from 'react';
// import UI components from PrimeReact
import { Fieldset } from 'primereact/fieldset';
import { Button } from 'primereact/button';
// import third party linking library to link pages.
import { Link } from 'react-router-dom';
// import css
import '../About/About.css';
// import images
import Runner from '../../images/runner_bridge.jpg';
import Shoes from '../../images/shoes.jpg';

class Login extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-image-div">
          <img src={Runner} alt="runner stretching on bridge" className="about-image" />
          <img src={Shoes} alt="shoes" className="about-image" />
        </div>
        <Fieldset legend="About this site" className="about-content">        
          <Link to="/contact">
            <Button label="Contact" className="btn home-btn" />
          </Link>
        </Fieldset>
      </div>
    );
  }
}

export default Login;
