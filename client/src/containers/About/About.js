// import React
import React, { Component } from 'react';
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
          <img src={Shoes} alt="shoes" className="about-image" id="about-image-2" />
        </div>
        <div className="about-title">
          <h1>About Running with Swag</h1>
          <p>A site created by runners, for runners.</p>
        </div>
        <div className="about-content">
          <p>
          I created this site because I love to run. Running is my passion.
          When I run, I feel God&apos;s strength in my legs, and that&apos;s why I continue
          to train every day so that I can run faster and farther than ever before.
          Running has been a big part of my life ever since I was a kid. In 2018, I started to train
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
          it up. This site&apos;s development will be ongoing and open source. So, if you are a
          runner and/or web developer and would like to contribute, let&apos;s get in touch.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
