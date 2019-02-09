import React, { Component } from 'react';
import Movies from './components/movies';
import {Route, Redirect, Switch} from 'react-router-dom';
import Navbar from './components/navbar';
import Customers from './components/customers';
import Rentals from './components/rentals';
import './App.css';
import Notfound from './components/not-found';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




class App extends Component {

  state = {
    user : "save"
  }

  render() {
    return (
      <React.Fragment>
      <Navbar/>
      <ToastContainer />
      <main className="container">
      <Switch>
        {/* passing additional props to route component */}
      {/* <Route path="/movies" render={(props) => <Movies sortBy={newest} {...props}/>}  />  */}
      <Route path="/register" component={RegisterForm} />
      <Route path="/login" component={LoginForm} />
      <Route path="/movies/:id" component={MovieForm} />
      <Route path="/movies" component={Movies} /> 
      {/* <Route path="/movies/new" component={MovieForm} />  */}
      <Route path="/customers" render={(props) => <Customers {...props} user={this.state.user} />} /> 
      <Route path="/rentals" component={Rentals} /> 
      <Redirect from="/" exact to="/movies" />

      <Route to="/not-found" component={Notfound}/>
      {/* <Route path="/" component={Movies} />  */}
      <Redirect to="not-found" />



      </Switch>
      </main>
      </React.Fragment>
    );
  }
}

export default App;
