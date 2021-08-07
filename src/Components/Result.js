import React from "react";
import './Result.css';

const Result = ({weather}) => {
    return ( 
        <>
            <p>Pogoda dla: {weather[2]}</p>
            <p>Temperatura: {weather[5]}</p>
        </>
     );
}
 
export default Result;