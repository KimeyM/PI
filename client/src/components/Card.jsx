import React from 'react';
import './Card.css'

export default function Card ({ flag, name, continent}) {
    return (
        <div className='cardcountry'>
          
            <div className='imag'>
                <img src={flag} alt="img not found" width="200px" height="150px" />
            </div>
            <div className='text'>
                {name} <br/>
                ‣ {continent}
            </div>
        </div>
    );
}