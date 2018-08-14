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
// import image
import trackImage from '../../images/start_line.jpg';

// Define Contact component.
class Contact extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      emailError: '',
      subject: '',
      subjectError: '',
      message: '',
      messageError: '',
      formSuccess: '',
      messagesRef: firebase.database().ref('messages'),
      formSuccessMessageClass: '',
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
      email, emailError, subject,
      subjectError, message, messageError, formSuccess, formSuccessMessageClass,
    } = this.state;

    const { user } = this.props;

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
      // Save message
      this.saveMessage(user, email, subject, message);
      this.setState({
        formSuccess: 'Thanks for the message! I will get back to you shortly.',
        formSuccessMessageClass: 'form-success-message',
        email: '',
        subject: '',
        message: '',
        emailError: '',
        subjectError: '',
        messageError: '',
      });

      // Hide form success message after 5 seconds
      setTimeout(() => {
        this.setState({
          formSuccessMessageClass: '',
          formSuccess: '',
        });
      }, 5000);
    }
  }

  render() {
    // console.log(this.props.user);
    const { user } = this.props;

    // ES6 destructuring
    const {
      email, emailError,
      subject, subjectError, message, messageError, formSuccess,
      formSuccessMessageClass,
    } = this.state;
    return (
      <div className="contact-container">
        {/* General information about contacting us goes here. */}
        <div className="contact-content">
          <h1>Contact me</h1>
          <p>I&apos;d love to hear from you!
            Contact me if you have a question or comment
            regarding something you saw on the site or if you would like
            to contribute to this project.
          </p>
          <p>If you have any ideas to make this site better,
            don&apos;t hesitate to reach out. Your feedback is greatly appreciated!
          </p>
        </div>
        {/* Image on contact page */}
        <img src={trackImage} alt="race start line" className="contact-image" />
        {/* Contact form */}
        <form className="contact-form">
          {/* Contact form - Name field */}
          <div id="contact-name">
            <label htmlFor="name">Name (read only)</label>
            <br />
            <InputText
              id="name"
              name="name"
              type="text"
              value={user}
              onChange={e => this.setState({ name: e.target.value })}
              readOnly
              className="name-input"
            />
          </div>
          {/* Contact form - Email field */}
          <div id="contact-email">
            <label htmlFor="email">Email</label>
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
            <label htmlFor="subject">Subject</label>
            <br />
            <InputText
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={e => this.setState({ subject: e.target.value })}
            />
            <small className="contact-form-error">{subjectError}</small>
          </div>
          <br />
          {/* Contact form - Message field */}
          <div id="contact-message">
            <label htmlFor="message">Message</label>
            <br />
            <InputTextarea
              rows={5}
              cols={30}
              value={message}
              placeholder="Your message"
              onChange={e => this.setState({ message: e.target.value })}
              autoResize={true}
            />
            <small className="contact-form-error">{messageError}</small>
            <br />
            <div className={formSuccessMessageClass}>{formSuccess}</div>
          </div>
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
