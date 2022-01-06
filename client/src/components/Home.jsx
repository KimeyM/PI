import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, filterCreated, orderByName, orderByPopulation, filterCountriesByContinents, getAllActivities } from '../actions';
import { Link } from 'react-router-dom'
import Card from './Card';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import './Home.css'


export default function Home(){
    
    const dispatch = useDispatch();
    const allCountries = useSelector ((state) => state.countries);
    const activities = useSelector ((state) => state.activities);
    const [orden, setOrden] = useState('');
    const [currentPage,setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const indexOfLastCountry = currentPage * countriesPerPage 
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage 
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);


    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect (() => {
        dispatch(getCountries());
        dispatch(getAllActivities());
    }, [dispatch]); 


    function handleSortN (e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrden(`Order ${e.target.value}`);
    }
    
    function handleSortP (e) {
        e.preventDefault();
        dispatch(orderByPopulation(e.target.value));
        setCurrentPage(1);
        setOrden(`Order ${e.target.value}`);
    };

    function handleFilterContinent(e){
        dispatch(filterCountriesByContinents(e.target.value));
    };

    function handleFilterActivities(e){
        dispatch(filterCreated(e.target.value));
    };


    return(
        <div className='home'>
           
           <div className='countriesapp'>COUNTRIES APP</div>
            
            <div>
                <div className='ordernfilter'>
                    <Link to = '/activity' style={{ textDecoration: 'none' }}>
                        <button className="bn3638 bn38">Create tourist activity</button>
                    </Link>
               
                    <div className='name'>
                        <div className='title'>Order by name:</div> 
                        <select onChange = {e => handleSortN(e)}>
                            <option value = 'none'>No order</option>
                            <option value = 'name_asc'>A → Z</option>
                            <option value = 'name_desc'>Z → A</option>
                        </select>
                    </div>

                    <div className='pop'>
                        <div className='title'>Order by population:</div>
                        <select onChange = {e => handleSortP(e)}>
                            <option value = 'none'>No order</option>
                            <option value = 'population_asc'>- → +</option>
                            <option value = 'population_desc'>+ → -</option>
                        </select>
                    </div>

                    <div className='cont'>
                        <div className='title'>Filter by continent:</div>
                        <select onChange={e => handleFilterContinent(e)}>
                            <option value = 'none'>No filter</option>
                            <option value = 'Asia'>Asia</option>
                            <option value = 'Americas'>America</option>
                            <option value = 'Africa'>Africa</option>
                            <option value = 'Europe'>Europe</option>
                            <option value = 'Oceania'>Oceania</option>
                        </select>
                    </div>

                    <div className='act'>
                        <div className='title'>Filter by activities</div>
                        <select onChange = {e => handleFilterActivities(e)}>
                            <option value='none'>No filter</option>
                            {
                               activities.map(e => <option value = {e.name} key = {e.id}>{e.name}</option>)
                            }
                        </select>
                    </div>

                    <SearchBar/>
                </div>
                
                <Pagination countriesPerPage = {countriesPerPage}
                allCountries = {allCountries.length}
                pagination = {pagination} />

                <div className='grid'>
                    {currentCountries?.map(el => { //mapeamos renderizamos la pagina seleccionada (1, 2 ...) 
                        return(
                            <div className='cards'>
                                <Link to={"/countries/" + el.id} style={{ textDecoration: 'none' }}>
                                    <Card name = {el.name} flag= {el.flag} continent = {el.continent} key={el.id}/>
                                </Link>
                            </div>
                        );
                    })
                    };
                </div>

            </div>
        </div>
    )};

