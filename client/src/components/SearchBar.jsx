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
        <div class="flexbox">
            <div class="search">

                <div>
                    <input type="text" onChange={handleSubmit} placeholder="🔍 Search..." required  />
                </div>
            </div>
        </div>
    );
};