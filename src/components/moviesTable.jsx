import React, { Component } from 'react';
import Likes from './common/likes';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';


class MoviesTable extends Component {
    columns = [
        {path: 'title', label: 'Title'},
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
        const {movies, onLike, onDelete, onSort, sortColumn } = this.props;
        return (  
            <table className="table">
            <TableHeader columns = {this.columns} 
            onSort={onSort} sortColumn={sortColumn} />
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

                    <TableBody columns={this.columns} data={movies} />
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
                </table>
        );
    }
}
  
export default MoviesTable;