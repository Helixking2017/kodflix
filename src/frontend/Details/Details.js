import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from '../Gallery-get';
import './Details.css';

export default class Details extends Component {

constructor() {
    super();
    this.state = {
        movie: {}
    };

}

componentDidMount() {
    let movieID = this.props.match.params.movieID;
    let movie = getGallery().find(function(movie) {
        return movie.id === movieID;
    });

    setTimeout(() => {
        this.setState({
            movie: movie
        });
    }, 1000);
}

    render() {
        if (this.state.movie === undefined) {
            return <Redirect to='/not-found'/>;
        }
        else {  
            return (
            <div className ='Details'>
                <h1>{this.state.movie.name}</h1>
                <div className='container'>
                    <div>{this.state.movie.details}</div>
                    <img
                        src={this.state.movie.movieImage}
                        alt={this.state.movie.name}/>
                </div>
                <Link to='/'>Back to home page</Link>
            </div>
            );
        }
    }

}





