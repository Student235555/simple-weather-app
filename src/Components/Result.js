import React from "react";
import './Result.css';

const Result = ({weather}) => {

    let content = null;

    if(weather[0].length < 1)

    return ( 
        <div className='result'>
            {<h3>Proszę podać nazwę miasta.</h3>}
        </div>
    );

    else if(!weather[7] && weather[0]){

        const sunriseTime = new Date(weather[3]*1000).toLocaleTimeString();
        const sunsetTime = new Date(weather[4]*1000).toLocaleTimeString();

        content = (
            <>
                <h3>Wyniki wyszukiwania dla: <em>{weather[0]}</em></h3>
                <h4>Dane dla dnia i godziny: {weather[1]}</h4>
                <h4>Temperatura: {weather[2]} &#176;C</h4>
                <h4>Wschód słońca: {sunriseTime}</h4>
                <h4>Zachód słońca: {sunsetTime}</h4>
                <h4>Ciśnienie: {weather[5]} hPa</h4>
                <h4>Siła wiatru: {weather[6]} m/s</h4>
            </>
        )
    }

    return ( 
      <div className='result'>
          {weather[7] ? <h3>Nie ma w bazie miasta: <em>{weather[0]}</em></h3>: content}
      </div>
     );
}
 
export default Result;