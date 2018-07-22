// import React
import React, { Component } from 'react';
// import UI components from PrimeReact.
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
// import css
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <header className="showcase">
          <h1>Running with Swag</h1>
          <p>Your stop for running events, blog posts, reviews, tips, and more</p>
          <Button label="LEARN MORE" className="btn" />
        </header>
        <Card title="Welcome" className="card welcome">
        </Card>
        <Card title="Looking for developers" className="card developer">
          <p>Are you a web developer interested in running and want to help build this site?</p>
          <p>For more information on how you can contribute, send an email to philipstubbs13@gmail.com.</p>
        </Card>
      </div>
    );
  }
}

export default Home;
