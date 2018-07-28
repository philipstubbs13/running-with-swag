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
    const APIKEY = '&api_key=' + process.env.RACE_API_KEY;
    // API secret
    const APISECRET = '&api_secret=' + process.env.RACE_API_SECRET;
    return axios.get(BASEURL + '&aflt_token=' + AFLT_TOKEN + '&event_type=' + event_type + '&zipcode=' + zipcode + '&radius=' + radius + APIKEY + APISECRET);
  },

  // Query Tmblr API
  // Grabs blog posts from the Tmblr blog site using the the Tmblr API.
  getPosts: function () {
    const BASEURL = 'https://api.tumblr.com/v2/blog/philipstubbs13.tumblr.com/posts/';
    // API key
    const APIKEY = '?api_key=3AQ7olkZ3dMR6BwInSXIVipgI5ZMVofOYnfJTP0TMQbz5NSKhl';
    return axios.get(BASEURL + APIKEY);
  },
  // Query Tmblr API
  // Grabs blog info/stats from the Tmblr blog site using the the Tmblr API.
  getInfo: function () {
    const BASEURL = 'https://api.tumblr.com/v2/blog/philipstubbs13.tumblr.com/info/';
    // API key
    const APIKEY = '?api_key=3AQ7olkZ3dMR6BwInSXIVipgI5ZMVofOYnfJTP0TMQbz5NSKhl';
    return axios.get(BASEURL + APIKEY);
  },
};

// Export API so that I can import it into the Events page.
export default api;
