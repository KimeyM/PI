import React from 'react';
import { useDispatch } from 'react-redux';
import { getNameCountries } from '../actions';
import './SearchBar.css'

export default function SearchBar (){
    const dispatch = useDispatch()

    function handleSubmit(e){
        dispatch(getNameCountries(e.target.value))
    };

    return (
        // <div className='both'>
        //     {/* <div className='inputcont'> */}
        //     <div className="search__container">
        //         <input type='text' placeholder='🔍 Search by name' className="search__input" onChange={handleSubmit}/>

        //         {/* <input type='text' placeholder='🔍 Search by name' className='input' onChange={handleSubmit}/> */}
        //     </div>
        // </div>
        <div class="flexbox">
            <div class="search">
                {/* <h1>Search countries</h1>
                <h3>Click on search icon, then type your keyword.</h3> */}
                <div>
                    <input type="text" onChange={handleSubmit} placeholder="🔍 Search..." required  />
                </div>
            </div>
        </div>
    );
};