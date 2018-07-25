// import axios
import axios from 'axios';

const api = {
  // Query RunSignUp Race API
  // Grabs races from the RunSignUp site using the the RunSignUp Race API.
  getRaces: function (zipcode, radius, event_type) {
    // API base url
    const BASEURL = ' http://runsignup.com/Rest/races/?format=json&events=T&race_headings=T&race_links=T&include_waiver=T&include_event_days=T&page=1&results_per_page=50&sort=date+ASC&only_partner_races=F&search_start_date_only=F&only_races_with_results=F&distance_units=K';
    // Affiliate token
    const AFLT_TOKEN = 'feNdk8TA5z1OI0HdwCtTZan9n97ZRlo6';
    // API key
    const APIKEY = '&api_key=0WzXp5Byj0Y6cwaysxHUZ1CzP9Ybl6E7';
    // API secret
    const APISECRET = '&api_secret=2GpUF3yO3WbSaDAZbFtRmEwYj6QsoJJG';
    return axios.get(BASEURL + '&aflt_token=' + AFLT_TOKEN + '&event_type=' + event_type + '&zipcode=' + zipcode + '&radius=' + radius + APIKEY + APISECRET);
  },
};

// Export API so that I can import it into the Events page.
export default api;
