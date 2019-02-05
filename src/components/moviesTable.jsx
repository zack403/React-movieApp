import React, { Component } from 'react';
import Likes from './common/likes';
import Table from './common/table';
import {Link} from "react-router-dom";


class MoviesTable extends Component {
    columns = [
        {path: 'title', label: 'Title', content : movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {key: 'like', 
        content: movie => <Likes liked={movie.liked} onLike={() => this.props.onLike(movie)}/>
        },
        {key: 'delete',
        content : movie => <button 
        onClick={() => this.props.onDelete(movie)} 
        className="btn btn-danger"><i className="fa fa-trash"></i>Delete</button>
        }
    ]

    render() { 
        const {movies, onSort, sortColumn } = this.props;
        return (  
            <Table 
            columns={this.columns} 
            data={movies} 
            sortColumn={sortColumn} 
            onSort={onSort} />
        );
    }
}
  
export default MoviesTable;

 {/* <thead className="thead">
                        <tr>
                        <th style={{cursor: 'pointer'}} onClick={() => this.raiseSort('title')}>Title</th>
                        <th style={{cursor: 'pointer'}} onClick={() => this.raiseSort('genre.name')}>Genre</th>
                        <th style={{cursor: 'pointer'}} onClick={() => this.raiseSort('nunmberInStock')}>Stock</th>
                        <th style={{cursor: 'pointer'}} onClick={() => this.raiseSort('dailyRentalRate')}>Rate</th>
                        <th>Likes</th>
                        <th>Action</th>
                        </tr>
                    </thead> */}



                    {/* <tbody>
                        {movies.map(movie => (
                             <tr key={movie._id}>
                             <td>{movie.title}</td>
                             <td>{movie.genre.name}</td>
                             <td>{movie.numberInStock}</td>
                             <td>{movie.dailyRentalRate}</td>
                             <td> <Likes liked={movie.liked} onLike={() => onLike(movie)}/> </td>
    
                             <td>
                                 <button onClick={() => onDelete(movie)} className="btn btn-danger"> <i className="fa fa-trash"></i>Delete</button>
                             </td>
    
                             </tr>
                        ))}
                       
                    </tbody> */}