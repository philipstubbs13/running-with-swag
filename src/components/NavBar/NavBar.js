// import React
import React, { Component } from 'react';
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
        url: '/',
      },
      {
        label: 'About',
        url: '/about',
      },
      {
        label: 'Events',
        url: '/events',
      },
      {
        label: 'Blog',
        url: '/blog',
      },
      {
        label: 'Reviews',
        url: '/reviews',
      },
      {
        label: 'Help',
        url: '/help',
      },
      ],
    };
  }

  render() {
    // ES6 destructuring
    const { items } = this.state;

    return (
      <div>
        <div className="content-section implementation">
          <Menubar model={items} className="menu-items">
            <Button label="Logout" icon="fa fa-sign-out" />
          </Menubar>
        </div>
      </div>
    );
  }
}

// Export the NavBar component so that the app can render it to the page.
export default NavBar;
