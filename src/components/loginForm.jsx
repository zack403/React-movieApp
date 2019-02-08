import React, { Component } from 'react';
import Joi from "joi-browser";
import Form from './form';

class LoginForm extends Form {
    // username = React.createRef();
    //ref={this.username} in the input field

    state = {
        data: {username: '', password: ''},
        errors : {}
    }
    

     schema = {
        username : Joi.string().required().label('Username'),
        password : Joi.string().required().label('Password')
    }



        // const {data} = this.state;
        // const errors = {};
        // if(data.username.trim() === '') 
        //     errors.username = "Username is required";
        // if(data.password.trim() === '') 
        //     errors.password = "Password is required";
        // return Object.keys(errors).length === 0 ? null : errors; 


    
    doSubmit = () => {
        //call the server
        console.log("submitted");

    }

    render() { 
        return ( 
                <div>
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton('Login')}
                    </form>
                </div>
                
        );
    }
}
 
export default LoginForm;