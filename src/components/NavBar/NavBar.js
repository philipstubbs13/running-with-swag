// import React
import React, { Component } from 'react';
// import third party linking library.
import { Link } from 'react-router-dom';
// import components from PrimeReact.
import { Button } from 'primereact/button';
import { Menubar } from '../../../node_modules/primereact/components/menubar/Menubar';
// import NavBar css file
import './NavBar.css';

// Define NavBar component
class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      items: [{
        label: 'Home',
        icon: 'fa fa-fw fa-home',
      },
      {
        label: 'About',
        icon: 'fa fa-fw fa-info',
      },
      {
        label: 'Events',
        icon: 'fa fa-fw fa-calendar-alt',
      },
      {
        label: 'Blog',
        icon: 'fa fa-fw fa-pen-alt',
      },
      {
        label: 'Reviews',
        icon: 'fa fa-fw fa-phone',
      },
      {
        label: 'Help', 
        icon: 'fa fa-fw fa-question',
      },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="content-section introduction">
          <div className="feature-intro">
            <h1>Running with Swag</h1>
            <p>Your stop for running events, blog posts, reviews, tips, and more</p>
          </div>
        </div>
        <div className="content-section implementation">
          <Menubar model={this.state.items} className="menu-items">
            <Button label="Logout" icon="fa fa-sign-out" />
          </Menubar>
        </div>
      </div>
    );
  }
}

// Export the NavBar component so that the app can render it to the page.
export default NavBar;
