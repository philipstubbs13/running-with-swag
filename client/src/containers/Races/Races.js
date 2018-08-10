// import React
import React, { Component } from 'react';
// import UI components from PrimeReact.
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import  { InputTextarea } from 'primereact/inputtextarea';
// import css
import './Races.css';
// import image
import runnerDude from '../../images/runner_dude.jpg';

class Races extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      titleError: '',
      story: '',
      storyError: '',
      image: '',
      imageError: '',
      formSuccess: '',
      formSuccessMessageClass: '',
    };
  }

  render() {
    // ES6 destructuring
    const {
      title, titleError, story, storyError,
      image, imageError, formSuccess,
      formSuccessMessageClass,
    } = this.state;
    return (
      <div className="races-container">
        <div className="races-header">
          <h1>Race Stories</h1>
        </div>
        <div className="side">
          <div className="share-story">
            <h2>Share your racing story</h2>
            <form className="story-form">
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
                  autoResize="true"
                  placeholder="What's your racing story?"
                  value={story}
                  onChange={e => this.setState({ story: e.target.value })}
                />
                <small className="story-form-error">{storyError}</small>
              </div>
              <div id="story-image" className="story-form-field">
                <label htmlFor="image">Image</label>
                <br />
                <InputText
                  id="story-image"
                  name="story-image"
                  type="text"
                  placeholder="Upload image"
                  value={image}
                  onChange={e => this.setState({ image: e.target.value })}
                />
                <small className="story-form-error">{imageError}</small>
              </div>
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
            <small>All submitted stories are reviewed by site administrator for approval before they are posted to this site.</small>
          </div>
        </div>
        <div className="main">
          <div className="race-content">
            <h1 className="race-post-title">Race title</h1>
            <p className="race-post-date">August 10, 2018</p>
            <img src={runnerDude} alt="runner dude" className="race-post-image" />
            <p className="race-post-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
          </div>
          <div className="race-content">
            <h1 className="race-post-title">Race title</h1>
            <p className="race-post-date">August 10, 2018</p>
            <img src={runnerDude} alt="runner dude" className="race-post-image" />
            <p className="race-post-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
          </div>
          <div className="race-content">
            <h1 className="race-post-title">Race title</h1>
            <p className="race-post-date">August 10, 2018</p>
            <img src={runnerDude} alt="runner dude" className="race-post-image" />
            <p className="race-post-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Races;