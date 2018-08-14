// import React
import React, { Component } from 'react';
// import third party linking library to link pages.
import { Link } from 'react-router-dom';
// import UI components from PrimeReact.
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
// import css
import './Home.css';

// Define the Home page component.
class Home extends Component {
  render() {
    return (
      // Main container for home page.
      <div className="home-container">
        {/* Top header on homae page. */}
        <div className="home-header">
          <h1>Running with Swag</h1>
          <p>A site created by runners, for runners.
          </p>
        </div>
        <header className="showcase">
          {/* Background image is defined in the Home.css file. */}
        </header>
        {/* Welcome to my site card */}
        <Card title="Welcome" className="card welcome">
          <p>Welcome to <b>Running with Swag</b> - an online community for runners.
            Whether you are a competitive runner or just a running enthusiast,
            this is the place for you.
          </p>
          <Link to="/about">
            <Button label="LEARN MORE" className="btn home-btn" />
          </Link>
        </Card>
        {/* Contact card */}
        <Card title="Contact me" className="card developer">
          <p>I&apos;d love to hear from you! Contact me by clicking
            the link below and entering your comment or question in the
            provided form.
          </p>
          <p>Ask a question, drop a comment, or provide
            feedback about running or anything you see posted on this site.
          </p>
          <Link to="/contact">
            <Button label="Contact" className="btn home-btn contact-home-btn" />
          </Link>
        </Card>
        {/* Find races card */}
        <Card className="card events">
          <i className="fas fa-road fa-3x" />
          <h2>Race stories</h2>
          <Link to="/races">
            <Button label="Read stories" className="btn home-btn" />
          </Link>
          <p>Each race has a unique, interesting story.
            Read more about my adventures as a runner or share your own race story.
          </p>
        </Card>
        {/* Check out my blog card. */}
        <Card className="card blog">
          <i className="fa fa-fw fa-pen-alt fa-3x" />
          <h2>Blog</h2>
          <Link to="/blog">
            <Button label="Read blog" className="btn home-btn" />
          </Link>
          <p>Read some swaggin&apos; articles about running.
            Here, you will find information on a variety of topics,
            including running tips, training, injuries, and more.
          </p>
        </Card>
        {/* Check out my product reviews card */}
        <Card className="card reviews">
          <i className="fas fa-star fa-3x" />
          <h2>Swag</h2>
          <Link to="/swag">
            <Button label="Check reviews" className="btn home-btn" />
          </Link>
          <p>Check out some reviews of the latest running swag.
          </p>
        </Card>
      </div>
    );
  }
}

// export the Home component so that the app can render the Home page.
export default Home;
