import React, {useState} from "react";
import './App.css';
import Form from "./Form";
import Result from "./Result";

//const APIkey = '1146d14d2af48b91a826d85e26a4117e';

const App = () => {

  const [cityName, setCityName] = useState('');

  return(
    <div className='main'>
      <Form name={cityName} change={setCityName}/>
      <Result/>
    </div>
  )
}

export default App;
