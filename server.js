const express = require('express');
const bodyParser = require('body-parser');
// const routes = require('./routes');
// const User = require('./models/User')

// Server will use port 3001.
const PORT = process.env.PORT || 3001;
// Yes, the app uses express.
const app = express();
// app.use(express.static(path.join(__dirname, 'build')));

// app.use(cors())

// app.use(function(req, res, next) { res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next(); });

// Configure body parser for axios requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Require all models
// const db = require('./models');

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }

// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reacthealthtracker');

// If deployed, use the deployed database. Otherwise use the local reacthealthtracker database
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/reacthealthtracker";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI, {
//   useMongoClient: true
// });

// Send every request to the React app
// Define any API routes before this runs
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  
app.listen(PORT, () => {
console.log(`🌎 ==> Server now on port ${PORT}!`);
});