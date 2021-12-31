import React from 'react';
import { useDispatch } from "react-redux";
import { getNameCountries } from '../actions';
import './SearchBar.css'

export default function SearchBar (){
    const dispatch = useDispatch()


    function handleSubmit(e){
        dispatch(getNameCountries(e.target.value))
    }


    return (
        <div className='both'>
            <div className="search">
                
            </div>
            <div className="inputcont">
                    <input type="text" placeholder="🔍 Search by name" className="input" onChange={handleSubmit}/>
            </div>
        </div>
        
    )

}