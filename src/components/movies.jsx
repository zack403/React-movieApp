import React, { Component } from 'react';
import {getMovies} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";
import Pagination from './common/pagination';
import {paginate} from "../utils/paginate";
import Genres from './genre';
import MoviesTable from './moviesTable';
import _ from "lodash";

class Movies extends Component {
    state = { 
        movies : [],
        genres : [],
        pageSize  : 4,
        currentPage: 1,
        selectedGenre: '',
        sortColumn : {path : "title", order : 'asc'}
     }


     componentDidMount() {
        const genres = [{_id: '',name: 'All Genres'}, ...getGenres()];
         this.setState({movies : getMovies(), genres : genres });
     }

     handleSort = sortColumn => {
         this.setState({sortColumn})
     }

     handleGenreSelect = genre => {
         this.setState({selectedGenre: genre, currentPage : 1});
     }

     handlePageChange = page => {
         this.setState({currentPage : page});
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
        const {movies : allMovies, selectedGenre, currentPage, pageSize, sortColumn} =  this.state;
        if(count === 0) return <p className="text-danger">There are no movies</p>

        //filtering , Sorting and then paginate the data.....
        const filtered = selectedGenre && selectedGenre._id ? 
        allMovies.filter(m => m.genre._id === selectedGenre._id) 
        : allMovies;

        //sorting to implement sorting we use loadash
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);


        const movies = paginate(sorted, currentPage, pageSize);

        return ( 
            <React.Fragment>
            <div className="row">
                <div className="col-3">
                <Genres items={this.state.genres} selectedItem={this.state.selectedGenre} onItemSelected={this.handleGenreSelect}/>
                </div>
            <div className="col">
            <p className="text-success">There are {filtered.length} movies</p>
            <MoviesTable 
            movies={this.state.movies} 
            sortColumn={sortColumn}
            onLike={this.handleLikes} 
            onDelete={this.handleDelete}
            onSort={this.handleSort} />

            <Pagination 
            itemCount={filtered.length} 
            pageSize={pageSize} 
            pageChange={this.handlePageChange}
            currentPage={currentPage}/>
            </div> 
        </div>
            </React.Fragment>
            );
    }
}
 
export default Movies;