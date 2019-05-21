import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieItem(props) {
    {
        
    }
    return (
    <Link to= {`/${props.id}`} className='movie-img-cover'>
    
      <img src={props.movieImage} alt={`${props.name} image`}/>
      <div className="overlay" id={props.name}>
        {props.name}
      </div>
    </Link>
    );
  }