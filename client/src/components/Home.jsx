import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getCountries, filterCreated, orderByName, orderByPopulation, filterCountriesByContinents, getAllActivities, postActivity } from '../actions';
import {Link} from 'react-router-dom'
import Card from './Card';
import Pagination from './Pagination';
import SearchBar from './SearchBar';


export default function Home(){
    
    const dispatch = useDispatch()
    const allCountries = useSelector ((state) => state.countries);
    const activities = useSelector ((state) => state.activities);
    const [orden, setOrden] = useState('')
    const [currentPage,setCurrentPage] = useState(1) 
    // la pagina actual sera 1
    const [countriesPerPage, setCountriesPerPage] = useState(10)
    //aca ponemos cuantos paises queremos por pagina
    const indexOfLastCountry = currentPage * countriesPerPage; //10 indice del ultimo pais
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage //indice del primer pais
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry); // aca me devuelve un array con los paises entres primer y ultimo 


    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    }



    useEffect (() =>{
        dispatch(getCountries());
        dispatch(getAllActivities())
    }, [dispatch])


    function handleSortN (e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrden(`Order ${e.target.value}`)
    }
    
    function handleSortP (e) {
        e.preventDefault();
        dispatch(orderByPopulation(e.target.value))
        setCurrentPage(1);
        setOrden(`Order ${e.target.value}`)
    }


    function handleFilterContinent(e){
        dispatch(filterCountriesByContinents(e.target.value))
    }


    function handleFilterActivities(e){
        dispatch (filterCreated(e.target.value))
    }


    return(
        <div>
            <Link to = '/activity'>
                <button>Create tourist activity</button>
            </Link>
            
            <div>
                <SearchBar/>
                
                Order by name: <select onChange = {e => handleSortN(e)}>
                <optgroup label="NAME">
                    <option value = 'name_asc'>A → Z</option>
                    <option value = 'name_desc'>Z → A</option>
                    </optgroup>
                </select>
                Order by population:<select onChange = {e => handleSortP(e)}>
                <optgroup label="POPULATION">
                    <option value = 'population_asc'>- → +</option>
                    <option value = 'population_desc'>+ → -</option>
                </optgroup>
                </select>
                Filter by continent:<select onChange={e => handleFilterContinent(e)}>
                <optgroup label="CONTINENT">
                    <option value = 'none'>All</option>
                    <option value = 'Asia'>Asia</option>
                    <option value = 'Americas'>America</option>
                    <option value = 'Africa'>Africa</option>
                    <option value = 'Europe'>Europe</option>
                    <option value = 'Oceania'>Oceania</option>
                    </optgroup>
                </select>

                Filter by activities<select onChange = {e => handleFilterActivities(e)}>
                    <optgroup label="ACTIVITIES">
                    <option value = 'All'>All</option>
                    {
                        activities.map(e => <option value = {e.name} key = {e.id}>{e.name}</option>)
                    }
                    </optgroup>
                </select>
                
                {/* <FilterByActivity activitySt={activitySt} handleFilterAct={handleFilterAct}/> */}
                
                <Pagination countriesPerPage = {countriesPerPage}
                allCountries = {allCountries.length}
                pagination = {pagination} />

           


                {currentCountries?.map(el => { //mapeamos renderizamos la pagina seleccionada (1, 2 ...) 
                        return(
                            <div>
                                <Link to={"/countries/" + el.id}>
                                    <Card name = {el.name} flag= {el.flag} continent = {el.continent} key={el.id}/>
                                </Link>
                            </div>
                        );
                    })
                } 
            </div>

        </div>
    )}

