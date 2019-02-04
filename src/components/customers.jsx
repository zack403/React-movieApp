import React, { Component } from 'react';

class Customers extends Component {
    state = {  }
    render() { 
        const {match} = this.props;
        return ( 
            <h2>Customers - {match.params.id}</h2>
         );
    }
}
 
export default Customers;