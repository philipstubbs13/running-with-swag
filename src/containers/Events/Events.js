// import React
import React, { Component } from 'react';
// import UI components from PrimeReact.
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
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
        <div className="search-form">
          <h1>Search for races in your area</h1>
          <form>
            <div id="event-zip-code">
              <label htmlFor="zip-code">Zip code*</label>
              <br />
              <InputText
                id="zip-code"
                name="zip code"
                type="number"
                placeholder="Enter zip code to search in."
                value={zipCode}
                onChange={(e) => this.setState({ zipCode: e.target.value })}
              />
              <small className="events-form-error">{zipCodeError}</small>
            </div>

            <div id="event-zip-radius">
              <label htmlFor="zip-radius">`Search within*</label>
              <br />
              <Dropdown
                value={zipRadius}
                options={zipRadiusOptions}
                style={{ width: '100%' }}
                onChange={this.onZipRadiusChange}
                placeholder="Search within"
                optionLabel="name"
              />
              <small className="events-form-error">{zipRadiusError}</small>
            </div>
            <div id="event-type">
              <label htmlFor="event-type">Event type*</label>
              <br />
              <Dropdown
                value={eventType}
                options={eventTypeOptions}
                style={{ width: '100%' }}
                onChange={this.onEventTypeChange}
                placeholder="event type"
                optionLabel="name"
              />
              <small className="events-form-error">{eventTypeError}</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Events;
