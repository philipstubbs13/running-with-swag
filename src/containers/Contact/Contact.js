// import React
import React, { Component } from 'react';
// import UI components from PrimeReact.
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
// import css
import './Contact.css';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };
  }

  render() {
    const { value } = this.state;
    return (
      <div className="contact-container">
        <div className="contact-content">
          <h1>Contact us today</h1>
          <p>We'd love to hear from you!
            Contact us if you have a question or comment
            regarding something you saw on the site.
          </p>
          <p>If you have any ideas to make this site better,
            don't hesitate to reach out. We welcome your feedback.
          </p>
        </div>
        <form className="contact-form">
          <div id="contact-name">
            <label htmlFor="name">Name</label>
            <br />
            <InputText id="name" name="name" type="text" placeholder="John Smith" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
          </div>
          <div id="contact-email">
            <label htmlFor="email">Email</label>
            <br />
            <InputText id="email" name="email" type="email" placeholder="jsmith@gmail.com" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
          </div>
          <div id="contact-phone">
            <label htmlFor="phone">Phone</label>
            <br />
            <InputText id="phone" name="phone" type="number" placeholder="" value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })} />
          </div>
          <div id="contact-message">
            <label htmlFor="message">Message</label>
            <br />
            <InputTextarea
              rows={5}
              cols={30}
              value={this.state.message}
              onChange={(e) => this.setState({ message: e.target.value })}
              autoResize={true}
            />
          </div>
          <br />
          <Button 
            label="Send"
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

export default Contact;
