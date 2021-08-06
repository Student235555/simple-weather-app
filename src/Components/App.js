import React, {useState} from "react";
import './App.css';
import Form from "./Form";
import Result from "./Result";

const APIkey = '1146d14d2af48b91a826d85e26a4117e';

const App = () => {

  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');
  const [temp, setTemp] = useState('');
  const [wind, setWind] = useState('');
  const [pressure, setPressure] = useState('');
  const [err, setErr] = useState(false);

  const handleClick = (e) => {
    
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${APIkey}&units=metric`;


    
    fetch(API)
      .then(response => {
        if(response.ok)
        {
          return response
        }
        throw Error("Nie udało się.")
      })
      .then(response => response.json())
      .then(data => {
        setErr(false);
      })
      .catch(err => { 
        console.log(err);
        setErr(true);
      })
  }

  return(
    <div className='main'>
      <Form 
        name={value} 
        change={setValue}
        submit={handleClick}
      />
      <Result error = {err}/>
    </div>
  )
}

export default App;
