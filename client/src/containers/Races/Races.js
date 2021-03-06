// import React
import React, { Component } from 'react';
// import UI components from PrimeReact.
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
// Import moment js library to get date when user submits story.
import moment from 'moment';
// import Firebase
import firebase from '../../firebase-config';
// import css
import './Races.css';
// import image
import raceImage from '../../images/race.jpg';

class Races extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      titleError: '',
      story: '',
      storyError: '',
      formSuccess: '',
      formSuccessMessageClass: '',
      storiesRef: firebase.database().ref('stories'),
      stories: [],
    };
  }

  componentDidMount() {
    // Grab stories from firebase database and add them to this.state.stories array.
    const storiesRef = firebase.database().ref('stories');
    storiesRef.on('value', (snapshot) => {
      const stories = snapshot.val();
      const newState = [];
      for (const story in stories) {
        newState.push({
          id: story,
          title: stories[story].title,
          user: stories[story].name,
          story: stories[story].story,
          date: stories[story].date,
        });
      }
      this.setState({
        stories: newState,
      });
      // console.log(stories);
    });
  }

  // Save story to firebase
  saveStory = (name, title, story) => {
    const { storiesRef } = this.state;
    const newStoryRef = storiesRef.push();
    newStoryRef.set({
      name,
      title,
      story,
      date: moment().format('MMM DD YYYY'),
    });
  }

  // On click handler for when user trys to submit story form
  handleStorySubmit = (event) => {
    // Prevent the form from submitting itself.
    event.preventDefault();
    // ES6 destructuring
    const {
      title, titleError, story,
      storyError, formSuccess, formSuccessMessageClass,
    } = this.state;

    const { user } = this.props;

    // If title field is blank, show validation error
    if (title === '') {
      this.setState({
        titleError: 'Title is required',
      });
    }

    // If story field is blank, show validation error
    if (story === '') {
      this.setState({
        storyError: 'Story is required',
      });
    } else {
      // Save story to backend database if form is filled out.
      // Save story
      this.saveStory(user, title, story);
      this.setState({
        formSuccess: 'Story posted successfully!',
        formSuccessMessageClass: 'form-success-message',
        title: '',
        story: '',
        titleError: '',
        storyError: '',
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

  // Here, instead of grabbing all of the items as we did before when adding a new item,
  // we instead look up a specific item by its key
  // (that strange -Kk8lHSMqC5oP6Qai0Vx key from before).
  // We can then call firebase.database()'s remove method, which strips it from the page.
  removeStory(storyId) {
    const storyRef = firebase.database().ref(`/stories/${storyId}`);
    storyRef.remove();
  }


  render() {
    // ES6 destructuring
    const {
      title, titleError, story, storyError,
      formSuccess, formSuccessMessageClass, stories,
    } = this.state;

    const { user } = this.props;

    return (
      <div className="races-container">
        <div className="races-header">
          <h1>Race Stories</h1>
          <p>Each race has a unique, interesting story.
          Read other&apos;s stories or share your own race story.
          </p>
          <img src={raceImage} alt="runner" className="race-image" />
        </div>
        <div className="side">
          <div className="share-story">
            <h2>Share your racing story</h2>
            <form className="story-form">
              <div id="name" className="story-form-field">
                <label htmlFor="name">Name (read only)</label>
                <br />
                <InputText
                  id="name"
                  name="name"
                  type="text"
                  value={user}
                  readOnly
                  className="name-input"
                />
              </div>
              <div id="story-title" className="story-form-field">
                <label htmlFor="title">Title</label>
                <br />
                <InputText
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Enter story title"
                  value={title}
                  onChange={e => this.setState({ title: e.target.value })}
                />
                <small className="story-form-error">{titleError}</small>
              </div>
              <div id="story-post" className="story-form-field">
                <label htmlFor="story">Story</label>
                <br />
                <InputTextarea
                  id="story"
                  name="story"
                  type="text"
                  rows={10}
                  autoResize={true}
                  placeholder="What's your racing story?"
                  value={story}
                  onChange={e => this.setState({ story: e.target.value })}
                />
                <small className="story-form-error">{storyError}</small>
              </div>
              <br />
              <div className={formSuccessMessageClass}>{formSuccess}</div>
              <br />
              <Button
                label="Submit story"
                onClick={this.handleStorySubmit}
                className="btn home-btn"
                type="submit"
                id="story-btn"
              />
            </form>
            <br />
            <small>Keep it clean. All submitted stories are reviewed by site administrator
                for appropriateness.
            </small>
          </div>
        </div>
        <div className="main">
          {stories.map((post) => {
            return (
              <div className="race-content" key={post.id}>
                <h1 className="race-post-title">{post.title}</h1>
                <p className="race-post-author">By {post.user}</p>
                <p className="race-post-date">{post.date}</p>
                <p className="race-post-text">{post.story}</p>
                <div>
                  {post.user === user
                    ? <button className="btn remove-btn" type="submit" onClick={() => this.removeStory(post.id)}>Delete Story</button> : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Races;
