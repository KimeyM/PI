import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import { getCountries, postActivity } from '../actions/index';
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import Validate from './Validate';
import './ActivityForm.css'

export default function ActivityForm(){
    let countries = useSelector(state => state.countries);
    let history = useNavigate()
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCountries())
        // eslint-disable-next-line
    }, [])
    
    const [activities, setActivities] = useState({
        name: "",
        duration: "",
        difficulty: "",
        season: "",
        countries: [],
    })

    const [errors, setErrors] = useState({})

    const [country, setCountry] = useState([])

    const handleChange = (e) => {
        setActivities({
            ...activities,
            [e.target.name]: e.target.value
        })
        setErrors(Validate({
            ...activities,
            [e.target.name]: e.target.value
        }))
    }

    const handleCountryId = (e) => {
        const alreadyExists = activities.countries.find(el => el === e.target.value)
        if(!alreadyExists){
            setActivities({
                ...activities,
                countries: [...activities.countries, e.target.value]
            })
            const found = countries.find(el => el.id === e.target.value)
            setCountry([...country, found])
        } 
    }

    const handleDeleteCountry = (id) => {
        setActivities({
            ...activities,
            countries: activities.countries.filter(el => el !== id)
        })
        let filtered = country.filter(el => el.id !== id)
        setCountry(filtered)
    }

    const handleSubmit = (e) => {
        // e.preventDefault();
        dispatch(postActivity(activities))
        setActivities({
            name: "",
            duration: "",
            difficulty: "",
            season: "",
            countries: [],
        })
        setCountry([])
        alert("Activity Created")
        history("/countries")
    }


    return (
        <form>
            <div>
            <div className='countriesapp'>COUNTRIES APP</div>
            <div className='nav'>
                <div className='soloback'>
                <div className="btn2">
                    <Link className="detailClick" style={{ textDecoration: 'none' }} to='/countries' >
                        <button className="bn3639 bn39" >Home</button>
                    </Link>
                </div>
                </div>
            </div>
            <div className='inputss'>
                
                    <div className='nameduration'>
                    <div className='justname'>
  
                    <p className='head'>Name</p>

                        <input type="text" placeholder="Name" name="name" id="name" value={activities.name} onChange={(e) => handleChange(e)} required className={errors.name && "error"}/>
                        {
                            errors.name && (
                                <p >{errors.name}</p>
                            )
                        }
                        </div>
                    <div className='justduration'>
                    <p className='head'>Duration</p>

                        <input type="text" placeholder="Duration" name="duration" id="name" value={activities.duration} onChange={(e) => handleChange(e)} required className={errors.duration && "error"}/>
                        {
                            errors.duration && (
                                <p className="errorP">{errors.duration}</p>
                            )
                        }
                        </div>
                    </div>
                
                <div className="div3">
                    <div className="difficultyForm">
                    <p className='headd'>Difficulty</p>
                        <div className="inputContainer">
                            <input type="radio" name="difficulty" id="veryEasy" value="1" onChange={(e) => handleChange(e)} required defaultChecked/>
                            <label htmlFor="veryEasy">Very Easy</label>
                        </div>
                        <div className="inputContainer">
                            <input type="radio" name="difficulty" id="easy" value="2" onChange={(e) => handleChange(e)} required/>
                            <label htmlFor="easy">Easy</label>
                        </div>
                        <div className="inputContainer">
                            <input type="radio" name="difficulty" id="medium" value="3" onChange={(e) => handleChange(e)} required/>
                            <label htmlFor="medium">Medium</label>
                        </div>
                        <div className="inputContainer">
                            <input type="radio" name="difficulty" id="hard" value="4" onChange={(e) => handleChange(e)} required/>
                            <label htmlFor="hard">Hard</label>
                        </div>
                        <div className="inputContainer">
                            <input type="radio" name="difficulty" id="veryHard" value="5" onChange={(e) => handleChange(e)} required/>
                            <label htmlFor="veryHard">Very Hard</label>
                        </div>
                    </div>
                    <div className="seasonForm">
                    <p className='heads'>Season</p>
                        <div className="inputContainer">
                            <input type="radio" name="season" id="winter" value="winter" onChange={(e) => handleChange(e)} defaultChecked required/>
                            <label htmlFor="winter">Winter</label>
                        </div>
                        <div className="inputContainer">
                            <input type="radio" name="season" id="spring" value="spring" onChange={(e) => handleChange(e)} required/>
                            <label htmlFor="spring">Spring</label>
                        </div>
                        <div className="inputContainer">
                            <input type="radio" name="season" id="summer" value="summer" onChange={(e) => handleChange(e)} required/>
                            <label htmlFor="summer">Summer</label>
                        </div>
                        <div className="inputContainer">
                            <input type="radio" name="season" id="autumn" value="autumn" onChange={(e) => handleChange(e)} required/>
                            <label htmlFor="autumn">Autumn</label>
                        </div>
                    </div>
                </div>






                
                <div className='pa'>
                <div className='selcoun'>
                        <label htmlFor="countries"></label>
                        <p className='head'>Select a Country</p>
                        <select className='fknselect' name="countries" defaultValue="" onChange={(e) => handleCountryId(e)} required>
                        
                            {
                                countries.map(country => {
                                    return <option key={country.id} value={country.id}>{country.name} ({country.id})</option>
                                })
                            }
                        </select>
                </div>
                    <div className='theones'>
                        <p className='head'>Selected countries</p>
                        <div className='idk' >
                            {
                                country.map(el => {
                                    return (
                                        <div className='each' key={el.id} >
                                           
                                              <button className='bn3733 bn33' onClick={() => handleDeleteCountry(el.id)}>DELETE</button>
                                          <img className='flagmini' src={el.flag} alt="flag" />
                                            <p className='flagname' key={el.id}>{el.name}</p>
                                        </div>
                                    )
                                })
                                
                            }
                        </div>
                    </div>
                    </div>
                    <div className='buttton' >
                        <button 
                       onClick={handleSubmit} type="submit" disabled={errors.name || errors.duration ? true : false}>Submit</button>
                    </div>
                </div>
            
            </div>
        </form>
    )
}

// // import { getCountries, postActivity } from '../actions/index';
// import { getCountries, postActivity } from '../actions/index'
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'

// export default function ActivityForm() {
//   const dispatch = useDispatch()
//   const countries = useSelector(state => state.countries)
//   const [activities, setActivities] = useState({
//     name: '',
//     difficulty: '',
//     duration: '',
//     season: '',
//     countries: [],
//   })
//   const [error, setError] = useState({
//     name: '',
//     difficulty: '',
//     duration: '',
//     season: '',
//     countries: [],
//   })

//   useEffect(() => {
//     dispatch(getCountries())
//   }, [dispatch])

//   function handleSubmit(e) {
//     dispatch(postActivity(activities))
//     setActivities(
//         { name: '',  difficulty: '', duration: '', season: '', countries: [],}
//     )
//         alert('Su actividad se agregó correctamente')
//   }
//   function handleChange(e) {
//     let name = e.target.name
//     let value = e.target.value
//     if (value === '') {
//       setError({ ...error, [name]: 'No se admite campo vacio' })
//     }
//      else if (
//          (name === 'name' || name === 'season') && /\d/.test(value)) 
//     {setError({ ...error, [name]: 'Solo se admiten letras' }
//     )
//     } else if (
//         name !== 'season' && name !== 'name' && isNaN(value))
//       setError(
//           { ...error, [name]: 'Solo se admiten numeros' })
//     setActivities({
//       ...activities,
//       [e.target.name]: e.target.value,
//     })
//   }

//   function handleSelect(e) {
//     setActivities({
//       ...activities,
//       countries: [...activities.countries, e.target.value],
//     })
//   }

//   return (
//     <>
      
//       <section>
//         <form>
//           <h2>Agregar actividad</h2>
//           <div>
//             <label htmlFor="name">Nombre de la Actividad: </label>
//             <input
//               onChange={handleChange}
//               value={activities.name}
//               name="name"
//               type="text"
//               placeholder="Agregue el nombre..."
//             ></input>
//             <br></br>
//           </div>

//           <div>
//             <label htmlFor="season">Temporadad de Actividad: </label>
//             <select
//               onChange={handleChange}
//               key={activities.season}
//               // value={activity.season}
//               id="season"
//               type="text"
//               name="season"
//               required="required"
//             >
//               <option value="">Escoja la temporada</option>
//               <option value="summer">Verano</option>
//               <option value="autumn">Otoño</option>
//               <option value="winter">Invierno</option>
//               <option value="spring">Primavera</option>
//             </select>
//             <br></br>
//           </div>

//           <div>
//             <label>Tiempo de Duración: </label>
//             <input
//               onChange={handleChange}
//               value={activities.duration}
//               id="duration"
//               type="text"
//               name="duration"
//               placeholder="tiempo en min"
//               required="required"
//             ></input>
//             <br></br>
//           </div>

//           <div>
//             <label htmlFor="difficulty">Nivel de dificultad </label>
//             <select
//               onChange={handleChange}
//               key={activities.difficulty}
//               // value={activity.difficulty}
//               id="difficulty"
//               type="text"
//               name="difficulty"
//               required="required"
//             >
//               <option value="">Escoga un Nivel</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//               <option value="5">5</option>
//             </select>
//             <br></br>
//           </div>

//           <div>
//             <label>Actividad por País: </label>
//             <select
//               onChange={handleSelect}
//               key={activities.countries}
//               // value={activity.countries}
//               id="countries"
//               type="text"
//               name="countries"
//               placeholder="Your Activity Country"
//               required="required"
//             >
//               {console.log(countries)}
//               <option value="All">Choose Activity Countries</option>

//               {countries.map(c => (
//                 <option key={c.id} value={c.id}>
//                   {c.name}
//                 </option>
//               ))}
//             </select>
//             <br></br>
//           </div>
//           <ul>
//             <li>
//               {activities.countries.map(c => `${c} ✅`)}
//             </li>
//           </ul>
//           <div>
//             <Link to="/home" style={{ textDecoration: 'none' }}>
//               <button>Back to Home</button>
//             </Link>
//             {error.name || error.season ? (
//               <span>Se ha detectado un error</span>
//             ) : null}
//             <button onClick={handleSubmit}>Agregar Actividad</button>
//           </div>
//         </form>
//       </section>
//     </>
//   )
// }