import React, { PureComponent } from 'react';
import {useEffect, useState} from "react";


const Hooks = () => {
    const [count, setCount] = useState(0);

    useEffect = () => {
    }


    return ( 
        <div>
            <span>You clicked me {count} times</span>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)} ></button>
        </div>
     );
}
 
export default Hooks;