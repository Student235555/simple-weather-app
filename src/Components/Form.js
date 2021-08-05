import React from "react";
import './Form.css';

const Form = ({name, change}) => {
    
    return ( 
        <form>
            <input 
                placeholder="Podaj nazwę miasta..." 
                value={name} 
                onChange={event => change(event.target.value)} 
                type="text">
            </input>

            <button className='searchBtn'>Wyszukaj miasta</button>
        </form>
     );
}
 
export default Form;