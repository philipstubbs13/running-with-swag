// import React
import React, { Component } from 'react';
// Import third party React router library.
import { Route, Switch, BrowserRouter } from 'react-router-dom';
// import Firebase
import firebase from './firebase-config';
// import the App css file
import './App.css';
// import PrimeReact css files
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
// import NavBar component
import NavBar from './components/NavBar';
// import Footer component
import Footer from './components/Footer';
// import Home page
import Home from './containers/Home';
// import About page
import About from './containers/About';
// import Blog page
import Blog from './containers/Blog';
// import Contact page
import Contact from './containers/Contact';
// import Reviews page
import Reviews from './containers/Reviews';
// import Events page
import Events from './containers/Events';

class App extends Component {
  constructor() {
    super();

    console.log(firebase.name);
    console.log(firebase.database());
  }

  state = {
    feedback: [],
    loading: true
  };

  componentWillMount() {
    // firebase.database() gives us a reference to the database service.
    // Using ref(), we can get a specific reference from the database.
    // if we we call ref('feedback'), we'll be getting the feedback reference from our database
    // and storing that reference in postsRef.
    let feedbackRef = firebase.database().ref('feedback');

    const _this = this;

    // postsRef.on('value', ...) gives us the updated value whenever
    // there's any change in the database.
    // postsRef.once('value', ...) will only give us the data once.
    feedbackRef.on('value', function (snapshot) {
      console.log(snapshot.val());

      // After we get the updated value in our on() callback, we store the values in our posts stae.
      _this.setState({
        feedback: snapshot.val(),
        loading: false,
      });
    });
  }

  // Make the feedback data available in all our children components,
  // which will be passed through react-router.
  // We're checking if this.props.childrn exists or not,
  // and if it exists we clone that element and pass all our props to all our children.
  // Calling cloneElement will shallowly merge the already existing props in this.props.children
  // and the props we passed here (firebaseRef, feedback, and loading).
  // firebaseRef, feedback, and loading props will be available to all routes.
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="entire-page">
            <NavBar />
            <div className="main-content-section">
              {this.props.children && React.cloneElement(this.props.children, {
                // https://github.com/ReactTraining/react-router/blob/v3/examples/passing-props-to-children/app.js#L56-L58
                firebase: firebase.database(),
                feedback: this.state.feedback,
                loading: this.state.loading 
              })}
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/events" component={Events} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/reviews" component={Reviews} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
