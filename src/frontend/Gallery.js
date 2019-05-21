import React from 'react';
import MovieItem from './MovieItem';
import Galleryget from './Gallery-get';



export default function Gallery() {
  return (

    <div>
      <div className="container">
      {
        Galleryget().map(element => (
          <MovieItem 
          key={element.key}
          id={element.id}
          name={element.name}
          movieImage={element.movieImage}
          />
        
        ))
      }
      </div>
    </div>
  );
}

