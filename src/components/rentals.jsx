import React, { Component } from 'react';
import SideBar from './sidebar';
import {Route} from "react-router-dom";
import User from './user';
import Post from './post';

class Rentals extends Component {
    state = {  }
    render() { 
        return (
            <div>
            <h2>Rentals</h2>
            <SideBar />
            <Route path="/rentals/user" component={User} />
            <Route path="/rentals/post" component={Post} />
            </div>
        );
    }
}
 
export default Rentals; 