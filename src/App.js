import React, { Component } from 'react';
import './App.css';
// import PrimeReact css files
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
// import NavBar component
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

      </div>
    );
  }
}

export default App;
