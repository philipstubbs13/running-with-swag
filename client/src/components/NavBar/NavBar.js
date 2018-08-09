// import React
import React, { Component } from 'react';
// import third party linking library to link pages.
import { Link } from 'react-router-dom';
// import components from PrimeReact.
import { Button } from 'primereact/button';
// import NavBar css file
import './NavBar.css';

// Define NavBar component
class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="navbar-container">
          <Link to="/">
            <Button label="Home" className="btn nav-link nav-btn" />
          </Link>
          <Link to="/about">
            <Button label="About" className="btn nav-link" />
          </Link>
          <Link to="/races">
            <Button label="Races" className="btn nav-link" />
          </Link>
          <Link to="/blog">
            <Button label="Blog" className="btn nav-link" />
          </Link>
          <Link to="/reviews">
            <Button label="Reviews" className="btn nav-link" />
          </Link>
          <Link to="/contact">
            <Button label="Contact" className="btn nav-link" />
          </Link>
        </div>
      </div>
    );
  }
}

// Export the NavBar component so that the app can render it to the page.
export default NavBar;
