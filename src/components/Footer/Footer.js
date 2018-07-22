// import React
import React from 'react';
// import UI components from PrimeReact.
import { Panel } from 'primereact/panel';
// import Footer css file
import './Footer.css';

// Define Footer component
function Footer() {
  return (
    <div>
      <div className="content-section implementation">
        <Panel header="Running with Swag">
          <p>Your stop for running events, blog posts, reviews, tips, and more.</p>
          <p>philipstubbs13@gmail.com</p>
          <br />
          <small>Copyright &copy; 2018</small>
        </Panel>
      </div>
    </div>
  );
}

// export Footer component so that the app can render it to the page.
export default Footer;
