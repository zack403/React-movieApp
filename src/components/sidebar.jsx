import React, { Component } from 'react';
import {Link} from "react-router-dom";


const SideBar = () => {
    return ( 
        <ul>
                <li>
                    <Link to="/rentals/post">Posts</Link>
                </li>
                <li>
                    <Link to="/rentals/user">Users</Link>
                </li>
            </ul>
     
     );
}
 
export default SideBar;