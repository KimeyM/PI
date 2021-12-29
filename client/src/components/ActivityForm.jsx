import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import { getCountries, postActivity } from '../actions/index';
import { useNavigate } from "react-router-dom"
import Validate from './Validate';

export default function ActivityForm(){
    let countries = useSelector(state => state.countries);
    let history = useNavigate()
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCountries())
        // eslint-disable-next-line
    }, [])
    
    const [input, setInput] = useState({
        name: "",
        duration: "",
        difficulty: "",
        season: "",
        countryId: [],
    })

    const [errors, setErrors] = useState({})

    const [country, setCountry] = useState([])

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(Validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    const handleCountryId = (e) => {
        const alreadyExists = input.countryId.find(el => el === e.target.value)
        if(!alreadyExists){
            setInput({
                ...input,
                countryId: [...input.countryId, e.target.value]
            })
            const found = countries.find(el => el.id === e.target.value)
            setCountry([...country, found])
        } 
    }

    const handleDeleteCountry = (id) => {
        setInput({
            ...input,
            countryId: input.countryId.filter(el => el !== id)
        })
        let filtered = country.filter(el => el.id !== id)
        setCountry(filtered)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postActivity(input))
        setInput({
            name: "",
            duration: "",
            difficulty: "",
            season: "",
            countryId: [],
        })
        setCountry([])
        alert("Activity Created")
        history("/countries")
    }


    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="parent">
                <div className="div1">
                    <div className="nameForm">
                        <input type="text" name="name" id="name" value={input.name} onChange={(e) => handleChange(e)} required className={errors.name && "error"}/>
                        <label htmlFor="name">Name</label>
                        {
                            errors.name && (
                                <p className="errorP">{errors.name}</p>
                            )
                        }
                    </div>
                    <div className="durationForm">
                        <input type="text" name="duration" id="duration" value={input.duration} onChange={(e) => handleChange(e)} required className={errors.duration && "error"}/>
                        <label htmlFor="duration">Duration</label>
                        {
                            errors.duration && (
                                <p className="errorP">{errors.duration}</p>
                            )
                        }
                    </div>
                </div>
                <div className="div3">
                    <div className="difficultyForm">
                        <h2>Difficulty</h2>
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
                        <h2>Season</h2>
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
                <div className="div2">
                    <div className="countryForm">
                        <label htmlFor="countryId"></label>
                        <select name="countryId" defaultValue="" onChange={(e) => handleCountryId(e)} required>
                            <option value="">Select a Country</option>
                            {
                                countries.map(country => {
                                    return <option key={country.id} value={country.id}>{country.name} ({country.id})</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="div4">
                    <div className="selectedForm">
                        <h3>Selected countries:</h3>
                        <div className="selectedDiv">
                            {
                                country.length > 0 ?
                                country.map(el => {
                                    return (
                                        <div key={el.id} className="selectedCard">
                                            <p key={el.id}>{el.name}</p>
                                            <img src={el.flag} alt="flag" />
                                            <br/>
                                            <button onClick={() => handleDeleteCountry(el.id)}>X</button>
                                        </div>
                                    )
                                })
                                : <></>
                            }
                        </div>
                    </div>
                    <div className="submitForm">
                        <button type="submit" disabled={errors.name || errors.duration ? true : false}>Submit</button>
                    </div>
                </div>
            </div>
        </form>
    )
}