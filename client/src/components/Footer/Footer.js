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
      <div className="footer">
        <Panel>
          <h1>Running with Swag</h1>
          <p>A site created by runners, for runners.</p>
          <br />
          <small>Copyright &copy; 2018</small>
        </Panel>
      </div>
    </div>
  );
}

// export Footer component so that the app can render it to the page.
export default Footer;
