import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, filterCreated, orderByName, orderByPopulation, filterCountriesByContinents, getAllActivities } from '../actions';
import { Link } from 'react-router-dom'
import Card from './Card';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import ActivityForm from './ActivityForm'
import './Home.css'
import css from '../img/css.png'
import react from '../img/React.png'
import redux from '../img/Redux-.png'
import node from '../img/node-js-2.png'
import express from '../img/express.png'
import sequelize from '../img/sequelize.png'
import postgresql from '../img/postgresql-logo.png'
import github from '../img/github.png'
import linkedin from '../img/linkedin.png'


export default function Home(){
    
    const dispatch = useDispatch();
    const allCountries = useSelector ((state) => state.countries);
    const activities = useSelector ((state) => state.activities);
    const [orden, setOrden] = useState('');
    const [currentPage,setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(8);
    const indexOfLastCountry = currentPage * countriesPerPage 
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage 
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);


    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    let next = () => {
        setCurrentPage(currentPage + 1)
    }

    let prev = () => {
        setCurrentPage(currentPage - 1)
    }

    let ult = () => {
        setCurrentPage(32)
    }

    let prim = () => {
        setCurrentPage(1)
    }

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
           
           <div id="home" className='countriesapp'>COUNTRIES APP</div>

            <div className='allhome'>
                <div className='ordernfilter'>
                    <button className="bn3638 bn38">
                        <a href='#form' style={{ textDecoration: 'none' }}>
                        Create tourist activity
                        </a>
                    </button> 
                    
                    

                    <div className='name'>
                        <div className='title'>Order by name:</div> 
                        <div className='custom-select'>
                            <select onChange = {e => handleSortN(e)}>
                                <option value = 'none'>No order</option>
                                <option value = 'name_asc'>A → Z</option>
                                <option value = 'name_desc'>Z → A</option>
                            </select>
                        </div>
                    </div>

                    <div className='pop'>
                        <div className='title'>Order by population:</div>
                        <div className='custom-select'>
                            <select onChange = {e => handleSortP(e)}>
                                <option value = 'none'>No order</option>
                                <option value = 'population_asc'>- → +</option>
                                <option value = 'population_desc'>+ → -</option>
                            </select>
                        </div>
                    </div>

                    <div className='cont'>
                        <div className='title'>Filter by continent:</div>
                        <div className='custom-select'>
                            <select onChange={e => handleFilterContinent(e)}>
                                <option value = 'none'>No filter</option>
                                <option value = 'Asia'>Asia</option>
                                <option value = 'Americas'>America</option>
                                <option value = 'Africa'>Africa</option>
                                <option value = 'Europe'>Europe</option>
                                <option value = 'Oceania'>Oceania</option>
                            </select>
                        </div>
                    </div>

                    <div className='act'>
                        <div className='title'>Filter by activities</div>
                        <div className='custom-select'>
                            <select onChange = {e => handleFilterActivities(e)}>
                                <option value='none'>No filter</option>
                                {
                                activities.map(e => <option value = {e.name} key = {e.id}>{e.name}</option>)
                                }
                            </select>
                        </div>
                    </div>

                   <SearchBar/>
                </div>
                
                <div className='grid'>
                    {currentCountries?.map(el => { 
                        return(
                            <div className='cards'>
                                <Link to={"/countries/" + el.id} style={{ textDecoration: 'none' }}>
                                    <Card
                                    name = {el.name}
                                    flag= {el.flag}
                                    continent = {el.continent}
                                    subregion = {el.subregion}
                                    capital = {el.capital}
                                    area = {Number(el.area).toLocaleString()}
                                    population = {Number(el.population).toLocaleString()} 
                                    key={el.id}/>
                                </Link>
                            </div>
                        );
                    })
                    }
                </div>
            </div>
            {/* <div className='cpage'>
                Page: {currentPage}
            </div> */}
            <div className='pags'>
                {/* {currentPage !== 1 ? <button className="bn3412 bn12" onClick={prim}>◄◄</button> : <div></div> } */}
                {/* {currentPage !== 1 ? <button className="bn3412 bn12" onClick={prev}>◄</button> : <div></div> }   */}
                <Pagination countriesPerPage = {countriesPerPage}
                    allCountries = {allCountries.length}
                    pagination = {pagination} />
                {/* {currentPage !== 32 ? <button className="bn3412 bn12" onClick={next}>►</button> : <div></div>} */}
                {/* {currentPage !== 32 ? <button className="bn3412 bn12" onClick={ult}>►►</button> : <div></div>} */}
            </div>

            <div className='space'>
                <br />
                <br />
                <br />
            </div>
            <div id='form'>
                <ActivityForm/>
            </div>
            

            <div className='space'>
                <br />
                <br />
                <br />
            </div>
                <div id="about" className='countriesapp'>ABOUT</div>
                <div className='nav'>
                    <button className="bn3639 bn39" >
                                    <a href='#home' style={{ textDecoration: 'none' }}>
                                        Home
                                    </a>
                    </button>
                    <button className="bn3638 bn38" >
                        <a href='#form' style={{ textDecoration: 'none' }}>
                        Create tourist activity
                        </a>
                    </button>
                </div>
                <div className='todoelabout'>
                    <div className='gridtext'>
                        <div className='g1'>
                            <h2>Sobre mí</h2>
                            <p>Mi nombre es Kimey Mastrángelo. Soy una Desarrolladora Web Full Stack (PERN)
                                apasionada por la programación, disfruto trabajar en
                                equipo y siempre me encuentro con ganas de seguir
                                aprendiendo.
                                Estoy en búsqueda de nuevos desafíos, donde pueda
                                desarrollarme como profesional y así también adquirir
                                una experiencia con la cual conseguir dar un paso
                                importante en mi desarrollo profesional y personal.
                                <br/><br />
                                <p className='con'>Contacto:</p>
                            </p>
                        </div>
                        <div className='contact'>
                            <Link to="https://www.linkedin.com/in/kimey-mastrangelo/"><img className='linkedin' src={linkedin} alt="not found"/></Link> 
                            <Link to="https://github.com/KimeyM"> <img className='github' src={github} alt="not found"/></Link>
                        </div>
                    <div className='g2'>
                    <h2>Proyecto individual (realizado en Henry)</h2>
                    <p>
                        Se trata de una Single Page Application (SPA) de países
                        con sus características detalladas, en la cual se accedió a
                        dicha información a través de la API "Rest Countries".
                        Es posible buscar los países por nombre, ordenarlos,
                        filtrarlos e incluso crear actividades turísticas a cada país
                        mediante un formulario controlado.</p>
                   </div> </div>
                   <h2>Tecnologías utilizadas: </h2>
                    
                        <p className='csst'>CSS, ReactJs, Redux, NodeJs, Express, Sequelize, PostrgreSQL</p>

                    <div className='gridicons'>
                        <img src={css} className='css' alt="not found"/>
                        <img src={react} className='react' alt="not found"/>
                        <img src={redux} className='redux' alt="not found"/>
                        <img src={node} className='node' alt="not found"/>
                        <img src={express} className='express' alt="not found"/>
                        <img src={sequelize} className='sequelize' alt="not found"/>
                        <img src={postgresql} className='postgresql' alt="not found"/>

                    </div>
                </div>
            </div>
        
    )};

