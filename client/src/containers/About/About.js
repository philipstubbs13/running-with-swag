// import React
import React, { Component } from 'react';
// import UI components from PrimeReact
import { Fieldset } from 'primereact/fieldset';
import { Button } from 'primereact/button';
// import third party linking library to link pages.
import { Link } from 'react-router-dom';
// import css
import './About.css';
// import images
import Runner from '../../images/runner_bridge.jpg';
import Shoes from '../../images/shoes.jpg';

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-image-div">
          <img src={Runner} alt="runner stretching on bridge" className="about-image" />
          <img src={Shoes} alt="shoes" className="about-image" />
        </div>
        <Fieldset legend="About this site" className="about-content">
          <p>
          I created this site because I love to run. Running is my passion.
          When I run, I feel God's strength in my legs, and that's why I continue
          to train every day so that I can run faster and farther than ever before.
          I have always liked running since I was a kid, but in 2018, I started to train
          and run competitively in different short distance (3-6 mile) races. My ultimate
          goal is to train my way up to running and finishing a marathon.
          </p>

          <p>
            I not only created this site to share my running adventures and experiences,
            but I also want to create an online community for runners to learn more about
            different running topics, find out about upcoming running events, and just have
            a place where runners can come together to share and exchange information with
            one another.
          </p>

          <p>
          I graduated from the University of Minnesota Full Stack Web Development program
          in May 2018, and I have been wanting to create a site like this for quite some
          time now. Now that I have graduated, I thought now would be a good time to start
          it up. This site's development will be ongoing and open source. So, if you are a
          runner and/or web developer and would like to contribute to this project, contact
          me using the link below.
          </p>
          <Link to="/contact">
            <Button label="Contact" className="btn home-btn" />
          </Link>
        </Fieldset>
      </div>
    );
  }
}

export default About;
