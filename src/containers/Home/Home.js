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
          <p>Your stop for running events, blog posts, reviews, tips, and more.</p>
        </div>
        <header className="showcase">
          {/* Background image is defined in the Home.css file. */}
        </header>
        {/* Welcome to my site card */}
        <Card title="Welcome" className="card welcome">
          <p>Welcome to <b>Running with Swag</b> - an online community for runners.
            Whether you are a competitive runner or just run for fun, this is the site for you.
          </p>
          <p>Click the button below to learn more.</p>
          <Link to="/about">
            <Button label="LEARN MORE" className="btn home-btn" />
          </Link>
        </Card>
        {/* Looking for developers to work on site card */}
        <Card title="Looking for developers" className="card developer">
          <p>Are you a web developer interested in running and want to help build this site?</p>
          <p>For more information on how you can contribute,
            send an email to philipstubbs13@gmail.com.
          </p>
        </Card>
        {/* Find races card */}
        <Card className="card events">
          <i className="fas fa-calendar-alt fa-3x" />
          <h2>Events</h2>
          <Link to="/events">
            <Button label="See events" className="btn home-btn" />
          </Link>
          <p>Look for upcoming racing events in your area. 5K, 10K, 15K,
            half marathon, full marathon, and more.
          </p>
        </Card>
        {/* Check out my blog card. */}
        <Card className="card blog">
          <i className="fa fa-fw fa-pen-alt fa-3x" />
          <h2>Blog</h2>
          <Link to="/blog">
            <Button label="Read blog" className="btn home-btn" />
          </Link>
          <p>Read some swaggin' articles about running.
            Here, you will find race stories, running tips, and more.
          </p>
        </Card>
        {/* Check out my product reviews card */}
        <Card className="card reviews">
          <i className="fas fa-star fa-3x" />
          <h2>Reviews</h2>
          <Link to="/reviews">
            <Button label="Check reviews" className="btn home-btn" />
          </Link>
          <p>Check out reviews of some of the races I ran as
            well as products I have bought to help me train.
          </p>
        </Card>
      </div>
    );
  }
}

// export the Home component so that the app can render the Home page.
export default Home;
