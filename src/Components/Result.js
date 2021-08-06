import React from "react";
import './Result.css';

const Result = ({error}) => {
    return ( 
        <>
            <p>{String(error)}</p>
        </>
     );
}
 
export default Result;