// import React
import React, { Component } from 'react';
// import UI components from PrimeReact.
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
// import css
import './Events.css';

class Events extends Component {
  constructor() {
    super();
    this.state = {
      zipCode: '',
      zipCodeError: '',
      zipRadius: '',
      zipRadiusError: '',
      eventType: '',
      eventTypeError: '',
    };

    this.onZipRadiusChange = this.onZipRadiusChange.bind(this);
    this.onEventTypeChange = this.onEventTypeChange.bind(this);
  }

  onZipRadiusChange(e) {
    this.setState({ zipRadius: e.value });
  }

  onEventTypeChange(e) {
    this.setState({ eventType: e.value });
  }

  // On click handler for when user trys to search for races
  handleSearchRaces = (event) => {
    // Prevent the form from submitting itself.
    event.preventDefault();
    // ES6 destructuring
    const {
      zipCode, zipCodeError, zipRadius, zipRadiusError, eventType, eventTypeError,
    } = this.state;

    // if zip code field is blank, show validation error.
    if (zipCode === '') {
      this.setState({
        zipCodeError: 'Zip code is required.',
      });
    }

    // if zip radius field is blank, show validation error.
    if (zipRadius === '') {
      this.setState({
        zipRadiusError: 'Select a search radius.',
      });
    }

    // if event type field is blank, show validation error.
    if (eventType === '') {
      this.setState({
        eventTypeError: 'Select an event type.',
      });
    } else {
      // Else, if form is filled out, display search results.
      console.log("Searching...");
      this.setState({
        zipCodeError: '',
        zipRadiusError: '',
        eventTypeError: '',
      });
    }
  }

  render() {
    const zipRadiusOptions = [
      { name: '5 miles', code: '5' },
      { name: '10 miles', code: '10' },
      { name: '15 miles', code: '15' },
      { name: '20 miles', code: '20' },
      { name: '30 miles', code: '30' },
      { name: '40 miles', code: '40' },
      { name: '50 miles', code: '50' },
      { name: '60 miles', code: '60' },
    ];

    const eventTypeOptions = [
      { name: 'Running race', code: 'running_race' },
      { name: 'Running only', code: 'running_only' },
      { name: 'Walking only', code: 'walking_only' },
      { name: 'Triathlon', code: 'triathlon' },
      { name: 'Virtual race', code: 'virtual_race' },
      { name: 'Trail race', code: 'trail_race' },
      { name: 'Adventure race', code: 'adventure_race' },
      { name: 'Obstacle course', code: 'obstacle_course' },
      { name: 'Other', code: 'other' },
    ];
    const {
      zipCode, zipCodeError, zipRadius, zipRadiusError, eventType, eventTypeError,
    } = this.state;
    return (
      <div className="events-container">
        <div className="search-results">
          <h1>Search results</h1>
        </div>
        <form className="search-form">
          <h1 className="search-form-header">Search for upcoming races in your area</h1>
          <div id="event-zip-code search-field">
            <label htmlFor="zip-code">Zip code*</label>
            <br />
            <InputText
              id="zip-code"
              name="zip code"
              type="number"
              placeholder="Enter zip code"
              value={zipCode}
              onChange={(e) => this.setState({ zipCode: e.target.value })}
            />
            <small className="events-form-error">{zipCodeError}</small>
          </div>

          <div id="event-zip-radius search-field">
            <label htmlFor="zip-radius">`Search within*</label>
            <br />
            <Dropdown
              value={zipRadius}
              options={zipRadiusOptions}
              style={{ width: '100%' }}
              onChange={this.onZipRadiusChange}
              placeholder="Select number of miles"
              optionLabel="name"
            />
            <small className="events-form-error">{zipRadiusError}</small>
          </div>
          <div id="event-type search-field">
            <label htmlFor="event-type">Event type*</label>
            <br />
            <Dropdown
              value={eventType}
              options={eventTypeOptions}
              style={{ width: '100%' }}
              onChange={this.onEventTypeChange}
              placeholder="Select event type"
              optionLabel="name"
            />
            <small className="events-form-error">{eventTypeError}</small>
          </div>
          <Button
            label="Search for races"
            onClick={this.handleSearchRaces}
            className="btn"
            type="submit"
            id="search-races-btn"
          />
        </form>
      </div>
    );
  }
}

export default Events;
