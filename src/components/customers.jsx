import React, { Component } from 'react';
import queryString from "query-string";

class Customers extends Component {
    state = {  }
    render() { 
        const {location, match, history, user} = this.props;
        const result = queryString.parse(location.search);
        return ( 
            <div className="container">
            <h2>Customers - {match.params.id}</h2>
            <button className="btn btn-primary" onClick={() => history.push("/rentals")} >{user}</button>
            </div>
         );
    }
}
 
export default Customers;