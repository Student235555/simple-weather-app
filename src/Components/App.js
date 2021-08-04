import React from "react";
import './App.css';
import Form from "./Form";
import Result from "./Result";

const APIkey = '1146d14d2af48b91a826d85e26a4117e';

function App() {
  return(
    <div className='main'>
      <Form/>
      <Result/>
    </div>
  )
}

export default App;
