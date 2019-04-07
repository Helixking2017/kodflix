import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import heatMovImg from './Images/heatImg.jpg';
import BerserkImg from './Images/Berserk.jpg';
import CodeGeassImg from './Images/Code Geass.jpg';
import FullMetalAlchemistImg from './Images/Fullmetal Alchemist Brotherhood.jpg';
import SamuraiChamplooImg from './Images/SamuraiChamploo.jpg';
import TrigunImg from './Images/Trigun.jpg';
import CowboyBebopImg from './Images/Cowboy Bebop.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className= "container">
            <div className="movie-img-cover"><h2 className="overlay"> Berserk</h2><img src={BerserkImg} alt="that ending!"/></div>
            <div className= "movie-img-cover"><h2 className="overlay"> Code Geass</h2><img src={CodeGeassImg} alt="the plottwists!"/></div>
            <div className= "movie-img-cover"><h2 className="overlay"> Full Metal Alchemist: Brotherhood</h2><img src={FullMetalAlchemistImg} alt="quality!"/></div>
          </div>
          <div className="container"> 
          <div className= "movie-img-cover"><h2 className="overlay"> Samurai Champloo</h2><img src={SamuraiChamplooImg} alt="the soundtrack!"/></div>
          <div className= "movie-img-cover"><h2 className="overlay"> Trigun</h2><img src={TrigunImg} alt="Love and peace!"/></div>
          <div className= "movie-img-cover"><h2 className="overlay"> CowboyBebop: The Movie</h2><img src={CowboyBebopImg} alt="that ending!"/></div>
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
