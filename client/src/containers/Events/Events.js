// import React
import React, { Component } from 'react';
import axios from 'axios';
// import UI components from PrimeReact.
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
// import css
import './Events.css';
// import API
import api from '../../utils/API';

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
      races: [],
      visible: false,
      data: [],
      error: '',
    };

    this.onZipRadiusChange = this.onZipRadiusChange.bind(this);
    this.onEventTypeChange = this.onEventTypeChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onHide = this.onHide.bind(this);
  }

  componentDidMount() {
    // api.getRaces(55337, 30, 'running_race')
    //   .then((res) => {
    //     console.log(res.data);
    //     this.setState({ races: res.data.races });
    //     console.log('Races retrieved from API and stores in state:', this.state.races);
    //   });
    // API base url
    const BASEURL = ' https://runsignup.com/Rest/races/?format=json&events=T&race_headings=T&race_links=T&include_waiver=T&include_event_days=T&page=1&results_per_page=50&sort=date+ASC&only_partner_races=F&search_start_date_only=F&only_races_with_results=F&distance_units=K';
    // Affiliate token
    const AFLT_TOKEN = process.env.RACE_AFLT_TOKEN;
    // API key
    const APIKEY = `&api_key=${process.env.RACE_API_KEY}`;
    // API secret
    const APISECRET = `&api_secret=${process.env.RACE_API_SECRET}`;
    const myInit = {
      method: 'HEAD',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    };
    // Active Network API
    // http://api.amp.active.com/v2/search?query=running&category=event&start_date=2018-08-05..&near=San%20Diego,CA,US&radius=50&api_key=zhaes29hmjuvydrktdavkqqb
    const proxyURL = "https://cors-anywhere.herokuapp.com/";
    const testURL = BASEURL + "&aflt_token=" + AFLT_TOKEN + "&event_type=" + "running_race" + "&zipcode=" + "55337" + "&radius=" + "30" + "A0WzXp5Byj0Y6cwaysxHUZ1CzP9Ybl6E7" + "2GpUF3yO3WbSaDAZbFtRmEwYj6QsoJJG";
      const myRequest = new Request(testURL, myInit);
      console.log(testURL);
  
    // axios.get(testURL)
    //   .then((res) => {
    //     console.log(res.data);
    //     this.setState({ races: res.data.races });
    //     console.log('Races retrieved from API and stores in state:', this.state.races);
    //   });

    fetch(proxyURL + testURL, {
      method:'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      // body:JSON.stringify({title:title, body:body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
  }


  onZipRadiusChange(e) {
    this.setState({ zipRadius: e.value });
  }

  onEventTypeChange(e) {
    this.setState({ eventType: e.value });
  }

  onClick(event) {
    this.setState({ visible: true });
  }

  onHide(event) {
    this.setState({ visible: false });
  }


  // On click handler for when user trys to search for races
  handleSearchRaces = (event) => {
    // Prevent the form from submitting itself.
    event.preventDefault();
    // ES6 destructuring
    const {
      zipCode, zipCodeError, zipRadius, zipRadiusError, eventType, eventTypeError,
      races,
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
      console.log('Searching for races...');
      console.log(zipCode);
      console.log(zipRadius.code);
      console.log(eventType.code);
      api.getRaces(zipCode, zipRadius.code, eventType.code)
        .then((res) => {
          console.log(res.data);
          this.setState({
            races: res.data.races,
            zipCode: '',
            zipRadius: '',
            eventType: '',
          });
          console.log('Races retrieved from API and stores in state:', races);
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
      zipCode, zipCodeError, zipRadius, zipRadiusError, eventType,
      eventTypeError, races,
    } = this.state;

    return (
      <div className="events-container">
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
              onChange={e => this.setState({ zipCode: e.target.value })}
            />
            <small className="events-form-error">{zipCodeError}</small>
          </div>

          <div id="event-zip-radius search-field">
            <label htmlFor="zip-radius">Search within*</label>
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

        <div className="search-results">
          {races.map(race => (
            <Card className="race-card" key={race.race.race_id}>
              <div className="race-name">
                <h4>{race.race.name}</h4>
              </div>
              <div className="signUp race-li">
                <a href={race.race.url} target="_blank" rel="noopener noreferrer">
                  <Button label="Sign up" className="race-btn btn" />
                </a>
              </div>
              <div className="race-details race-li">
                <b>Race information</b>
                {race.race.events.map(event => (
                  <div key={event.event_id} className="event-listings">
                    {event.name}
                    <br />
                    {event.start_time}
                  </div>
                ))}
              </div>
              <div className="race-address race-li">
                <b>Location</b>
                <br />
                {race.race.address.street}
                <br />
                {race.race.address.city}, {race.race.address.state} {race.race.address.zipcode}
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default Events;
