import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import heatMovImg from './Images/heatImg.jpg';
import BerserkImg from './Images/Berserk.jpg';
import CodeGeassImg from './Images/Code Geass.jpg';
import FullMetalAlchemistImg from './Images/Fullmetal Alchemist.jpg';
import SamuraiChamplooImg from './Images/Samurai Champloo.jpg';
import TrigunImg from './Images/Trigun.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className= "container">
            <div className= "item movie-title"><img src="" </div>
            <div className= "item movie-title">movie2</div>
            <div className= "item movie-title">movie3</div>
          </div>
          <div className="container"> 
            <div className= "item movie-title">movie4</div>
            <div className= "item movie-title">movie5</div>
            <div className= "item movie-title">movie6</div>
          </div>
          <p>
            <h1> Yo! Check out my first website/app project!</h1>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
