import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//react-router-dom 5.0.0
import Details from './Details/Details';
import logo from './logo.svg';
import './App.css';
import NotFound from './NotFound';

import Gallery from './Gallery';


class App extends Component {

  

  render() {
    return (
      <Router>
        <div className="App">
        <Switch>          
          <Route exact path ='/' component = {Gallery}/>
          <Route exact path='/not-found' component = {NotFound}/> 
          <Route exact path='/:movieID' component = {Details}/>
        </Switch>
        </div>
      </Router>
      
    );
  }
}





export default App;
