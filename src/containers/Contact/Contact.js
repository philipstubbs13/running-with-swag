// import React
import React, { Component } from 'react';
// import UI components from PrimeReact.
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
// import Firebase
import firebase from '../../firebase-config';
// import css
import './Contact.css';

// Define Contact component.
class Contact extends Component {
  constructor() {
    super();

    console.log(firebase.name);
    console.log(firebase.database());

    this.state = {
      name: '',
      nameError: '',
      email: '',
      emailError: '',
      subject: '',
      subjectError: '',
      message: '',
      messageError: '',
      formSuccess: '',
      messagesRef: firebase.database().ref('messages'),
    };
  }

  // Save message to firebase
  saveMessage = (name, email, subject, message) => {
    const { messagesRef } = this.state;
    const newMessageRef = messagesRef.push();
    newMessageRef.set({
      name,
      email,
      subject,
      message,
    });
  }

  // On click handler for when user trys to submit contact form
  handleContactSubmit = (event) => {
    // Prevent the form from submitting itself.
    event.preventDefault();
    // ES6 destructuring
    const {
      name, nameError, email, emailError, subject,
      subjectError, message, messageError, formSuccess,
    } = this.state;

    // If name field is blank, show validation error
    if (name === '') {
      this.setState({
        nameError: 'Name is required',
      });
    }

    // If email field is blank, show validation error
    if (email === '') {
      this.setState({
        emailError: 'Email is required',
      });
    }

    // If subject field is blank, show validation error
    if (subject === '') {
      this.setState({
        subjectError: 'Subject is required',
      });
    }

    // If messsage field is blank, show validation error
    if (message === '') {
      this.setState({
        messageError: 'Message is required',
      });
    } else {
      // Save message to backend database if form is filled out.
      console.log('Form valid.');
      console.log(`Name: ${name}. Email: ${email}.`);
      console.log(`Subject: ${subject}. Message: ${message}`);
      // Save message
      this.saveMessage(name, email, subject, message);
      this.setState({
        formSuccess: 'Thanks for the message! We will get back to you shortly.',
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  }

  render() {
    // ES6 destructuring
    const {
      name, nameError, email, emailError,
      subject, subjectError, message, messageError, formSuccess,
    } = this.state;
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
            <label htmlFor="name">Name* </label>
            <br />
            <InputText
              id="name"
              name="name"
              type="text"
              placeholder="John Smith"
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
            />
            <small className="contact-form-error">{nameError}</small>
          </div>
          {/* Contact form - Email field */}
          <div id="contact-email">
            <label htmlFor="email">Email* </label>
            <br />
            <InputText
              id="email"
              name="email"
              type="email"
              placeholder="jsmith@gmail.com"
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <small className="contact-form-error">{emailError}</small>
          </div>
          {/* Contact form - Subject field */}
          <div id="contact-subject">
            <label htmlFor="subject">Subject*</label>
            <br />
            <InputText
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => this.setState({ subject: e.target.value })}
            />
            <small className="contact-form-error">{subjectError}</small>
          </div>
          <br />
          {/* Contact form - Message field */}
          <div id="contact-message">
            <label htmlFor="message">Message*</label>
            <br />
            <InputTextarea
              rows={5}
              cols={30}
              value={message}
              placeholder="Your message"
              onChange={(e) => this.setState({ message: e.target.value })}
              autoResize={true}
            />
            <small className="contact-form-error">{messageError}</small>
            <br />
            <br />
            <small>* Required field</small>
          </div>
          <br />
          <br />
          <div className="form-success-message">{formSuccess}</div>
          {/* Contact form - Send/Submit button */}
          <Button
            label="Send message"
            onClick={this.handleContactSubmit}
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
