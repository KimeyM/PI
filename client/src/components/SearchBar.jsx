import React from 'react';
import { useDispatch } from "react-redux";
import { getNameCountries } from '../actions';

export default function SearchBar (){
    const dispatch = useDispatch()


    function handleSubmit(e){
        dispatch(getNameCountries(e.target.value))
    }


    return (
        <div>
            <div className="Search">
                Search
            </div>
            <div className="name">
                    <input type="text" placeholder="Search by name" className="inputCountry" onChange={handleSubmit}/>
            </div>
        </div>
        
    )

}