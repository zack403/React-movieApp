import React, { Component } from 'react';
import Movies from './components/movies';
import {Route, Redirect, Switch} from 'react-router-dom';
import Navbar from './components/navbar';
import Customers from './components/customers';
import Rentals from './components/rentals';
import './App.css';
import Notfound from './components/not-found';


class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbar/>
      <main className="container">
      <Switch>
        {/* passing additional props to route component */}
      {/* <Route path="/movies" render={(props) => <Movies sortBy={newest} {...props}/>}  />  */}
      <Route path="/movies" component={Movies} /> 
      <Route path="/customers" component={Customers} /> 
      <Route path="/rentals" component={Rentals} /> 
      <Route to="/not-found" component={Notfound}/>
      {/* <Route path="/" component={Movies} />  */}
      <Redirect from="/" exact to="/movies" />
      <Redirect to="not-found" />



      </Switch>
      </main>
      </React.Fragment>
    );
  }
}

export default App;
