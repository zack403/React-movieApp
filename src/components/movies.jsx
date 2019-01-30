import React, { Component } from 'react';
import {getMovies} from "../services/fakeMovieService";
import Likes from './common/likes';

class Movies extends Component {
    state = { 
        movies : getMovies(),
     }


     handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies : movies});
        if(movies) console.log(`movie ${movie.title} has been deleted`);
     }

     handleLikes = (movie) => {
         const movies = [...this.state.movies];
         const index = movies.indexOf(movie);
         movies[index] = {...movies[index]};
         movies[index].liked = !movies[index].liked;
         this.setState({movies});
     }

    render() { 
        const {length: count} = this.state.movies;
        if(count === 0) return <p>There are no movies</p>
        return ( 
            <React.Fragment>
            <h1>there are {count} movies</h1>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th>Likes</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie => (
                         <tr key={movie._id}>
                         <td>{movie.title}</td>
                         <td>{movie.genre.name}</td>
                         <td>{movie.numberInStock}</td>
                         <td>{movie.dailyRentalRate}</td>
                         <td> <Likes liked={movie.liked} onLike={() => this.handleLikes(movie)}/> </td>

                         <td>
                             <button onClick={() => this.handleDelete(movie)} className="btn btn-danger"> <i className="fa fa-trash"></i>Delete</button>
                         </td>

                         </tr>
                    ))}
                   
                </tbody>
            </table>
            </React.Fragment>
            );
    }
}
 
export default Movies;