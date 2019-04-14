import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
//react-router-dom 5.0.0
import Details from './Details';
import logo from './logo.svg';
import './App.css';

import Gallery from './Gallery';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path ='/' component = {Gallery}/>
          <Route exact path='/Details' component = {Details}/>         
        </div>
      </Router>
      
    );
  }
}





export default App;
