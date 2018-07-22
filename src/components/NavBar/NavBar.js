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
        icon: 'fa fa-fw fa-home',
        url: '/',
      },
      {
        label: 'About',
        icon: 'fa fa-fw fa-info',
        url: '/about',
      },
      {
        label: 'Events',
        icon: 'fa fa-fw fa-calendar-alt',
        url: '/events',
      },
      {
        label: 'Blog',
        icon: 'fa fa-fw fa-pen-alt',
        url: '/blog',
      },
      {
        label: 'Reviews',
        icon: 'fa fa-fw fa-phone',
        url: '/reviews',
      },
      {
        label: 'Help',
        icon: 'fa fa-fw fa-question',
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
            <Button label="Logout" icon="fa fa-sign-out" className="btn" />
          </Menubar>
        </div>
      </div>
    );
  }
}

// Export the NavBar component so that the app can render it to the page.
export default NavBar;
