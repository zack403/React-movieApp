import React, { Component } from 'react';

const InputLogic = ({name, label, handleChange,error, ...rest}) => {

    //here use the rest operator(...rest) to initialize the type , value and name prop since they are the same 
    //value={value}  type={type}

    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
            {...rest} 
            onChange={handleChange} 
            name={name} 
            id={name} 
            className="form-control"/>
            { error && <div className="alert alert-danger">{error}</div>}
        </div>
     );
}
 
export default InputLogic;