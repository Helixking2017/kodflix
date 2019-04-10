import React from 'react';
import MovieItem from './MovieItem'
import BerserkImg from './Images/Berserk.jpg';
import CodeGeassImg from './Images/Code Geass.jpg';
import FullMetalAlchemistImg from './Images/Fullmetal Alchemist Brotherhood.jpg';
import SamuraiChamplooImg from './Images/SamuraiChamploo.jpg';
import TrigunImg from './Images/Trigun.jpg';
import CowboyBebopImg from './Images/Cowboy Bebop.jpg';



export default function Gallery(props) {
  return (

    <div>
      <div className="container">
        <MovieItem name="Berserk" movieImage={BerserkImg}></MovieItem>
        <MovieItem name="Code Geass" movieImage={CodeGeassImg}></MovieItem>
        <MovieItem name="Full Metal Alchemist: Brotherhood" movieImage={FullMetalAlchemistImg}></MovieItem>
      </div>
      <div className="container">
        <MovieItem name="Samurai Champloo" movieImage={SamuraiChamplooImg}></MovieItem>
        <MovieItem name="Trigun" movieImage={TrigunImg}></MovieItem>
        <MovieItem name="Cowboy Bebop" movieImage={CowboyBebopImg}></MovieItem>
      </div>


    </div>
  )
}