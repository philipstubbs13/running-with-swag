// import React
import React, { Component } from 'react';
// import UI components from PrimeReact.
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
// import css
import './Contact.css';

// Define Contact component.
class Contact extends Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };
  }

  render() {
    // ES6 destructuring
    const { value } = this.state;
    return (
      <div className="contact-container">
        {/* General information about contacting us goes here. */}
        <div className="contact-content">
          <h1><i className="fas fa-envelope"></i> Contact us today</h1>
          <p>We'd love to hear from you!
            Contact us if you have a question or comment
            regarding something you saw on the site.
          </p>
          <p>If you have any ideas to make this site better,
            don't hesitate to reach out. Your feedback is greatly appreciated!
          </p>
        </div>
        {/* Contact form */}
        <form className="contact-form">
          {/* Contact form - Name field */}
          <div id="contact-name">
            <label htmlFor="name">Name*</label>
            <br />
            <InputText id="name" name="name" type="text" placeholder="John Smith" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
          </div>
          {/* Contact form - Email field */}
          <div id="contact-email">
            <label htmlFor="email">Email*</label>
            <br />
            <InputText id="email" name="email" type="email" placeholder="jsmith@gmail.com" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
          </div>
          {/* Contact form - Phone field */}
          <div id="contact-phone">
            <label htmlFor="phone">Phone</label>
            <br />
            <InputText id="phone" name="phone" type="number" placeholder="" value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })} />
          </div>
          {/* Contact form - Subject field */}
          <div id="contact-subject">
            <label htmlFor="subject">Subject*</label>
            <br />
            <InputText id="subject" name="subject" type="text" placeholder="Subject" value={this.state.subject} onChange={(e) => this.setState({ subject: e.target.value })} />
          </div>
          <br />
          {/* Contact form - Message field */}
          <div id="contact-message">
            <label htmlFor="message">Message*</label>
            <br />
            <InputTextarea
              rows={5}
              cols={30}
              value={this.state.message}
              placeholder="Your message"
              onChange={(e) => this.setState({ message: e.target.value })}
              autoResize={true}
            />
            <small>* Required field</small>
          </div>
          <br />
          <br />
          {/* Contact form - Send/Submit button */}
          <Button 
            label="Send your message"
            onClick={this.handleClick}
            className="btn"
            type="submit"
            id="contact-btn"
          />
        </form>
      </div>
    );
  }
}

// Export the Contact component so that the app can render it to the page.
export default Contact;
