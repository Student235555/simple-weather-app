import React from "react";
import './Form.css';

const Form = () => {
    return ( 
        <form>
            <input placeholder="Podaj nazwę miasta..." type="text"></input>
            <button className='searchBtn'>Wyszukaj miasta</button>
        </form>
     );
}
 
export default Form;