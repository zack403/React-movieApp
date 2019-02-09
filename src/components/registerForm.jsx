import React, { Component } from 'react';
import Joi from  "joi-browser";
import Form from './form';

class RegisterForm extends Form {
    state = { 
        data: {email: '', password: '', name: ''} ,
        errors : {}
     }


     schema =  {
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().max(7).min(5).required().label('Password'),
        name: Joi.string().required().label('Name')
     }


     doSubmit = () => {
        //call the server
        console.log("submitted");

    }


    render() { 
        return ( 
            <div>
                    <h1>Register</h1>
                    <form onSubmit={this.handleSubmit}>
                    {this.renderInput('email', 'Email', 'email')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderInput('name', 'Name')}


                    {this.renderButton('Register')}
                    </form>

            </div>
         );
    }
}
 
export default RegisterForm;