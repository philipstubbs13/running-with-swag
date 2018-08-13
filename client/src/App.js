// import React
import React, { Component } from 'react';
// Import third party React router library.
import { Route, Switch, BrowserRouter } from 'react-router-dom';
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
import Swag from './containers/Swag';
// import Races page
import Races from './containers/Races';
// import Login page
import Login from './containers/Login';
// import Firebase
import firebase, { auth, provider } from './firebase-config';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      user: null,
    };

    this.login = this.login.bind(this);
    // this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    // When the user signs in, this checks the Firebase database to see
    // if they were already previously authenticated.
    // If they were, we set their user details back into the state.
    // auth.onAuthStateChanged((user) => {
    //   if (user) {
    //     this.setState({ user });
    //   }
    // });
  }

  // Handles authentication with firebase.
  // Here we call the signInWithPopup method from the auth module,
  // and pass in our provider (remember this refers to the Google Auth Provider).
  // Now, when you click the 'login' button, it will trigger a popup
  // that gives us the option to sign in with a Google account
  // signInWithPopup has a promise API that allows us to call
  // .then on it and pass in a callback.
  // This callback will be provided with a result object that contains,
  // among other things, a property called .user that has all the
  // information about the user who has just successfully signed in
  // including their name and user photo. We then store this inside of the state using setState.
  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        const user = result.user;
        this.setState({
          user,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="entire-page">
          {this.state.user ?
            <div>
            <NavBar />
            <div className="main-content-section">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/races" component={Races} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/swag" component={Swag} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </div>
            </div>
            :
            <div className="main-content-section">
              <button onClick={this.login}>Log In</button> 
            </div>
          }
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
