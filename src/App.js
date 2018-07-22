// import React
import React, { Component } from 'react';
// import the App css file
import './App.css';
// Import third party React router library.
import { Route, Switch, BrowserRouter } from 'react-router-dom';
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
// import Help page
import Help from './containers/Help';
// import Reviews page
import Reviews from './containers/Reviews';
// import Events page
import Events from './containers/Events';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="main-content-section">
          <BrowserRouter>
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/events" component={Events} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/reviews" component={Reviews} />
                <Route exact path="/help" component={Help} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
