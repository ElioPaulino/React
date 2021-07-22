import React from 'react';
import './Buttons.css'

const Button = ({children, onClick}) => {
    return ( 
        <button onClick= {onClick} className = "button">
            {children}
        </button>
     );
}
 
export default Button;