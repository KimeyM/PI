// import React from 'react';
// import './Card.css'

// export default function Card ({ flag, name, continent }) {
//     return (
//         <div className='cardcountry'>
//             <div className='imag'>
//                 <img src={flag} alt="img not found" width="200px" height="150px" />
//             </div>
//             <div className='text'>
//                 {name} <br/>
//                 ‣ {continent}
//             </div>
//         </div>
//     );
// };

import React from 'react';
import './Card.css'

export default function Card ({ flag, name, continent, subregion, capital, area, population }) {
    return (
        <div className='cardcountry'>
            <div className='content'>
                <div className='two'>
                <img className='flagcard' src={flag} alt="img not found" width="200px" height="150px" />
                <h2 className='titlec'>{name}</h2></div>
                <p className='copy'>
                    Continent: {continent} <br />
                    Subregion: {subregion} <br />
                    Capital: {capital} <br />
                    Area: {area} km² <br />
                    Population: {population} <br /> <br />
                    Click for Activities                  
                </p>
            </div>
        </div>
    );
};