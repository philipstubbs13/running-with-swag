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

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="entire-page">
            <NavBar />
            <div className="main-content-section">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/races" component={Races} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/swag" component={Swag} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/login" component={Login} />
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
