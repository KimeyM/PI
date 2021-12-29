import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams } from "react-router"
import { Link } from 'react-router-dom';
import ActivityDetails from "./ActivityDetails"


const DetailCountry = () => {
    let params = useParams()

    const [details, setDetails] = useState({})

    useEffect(() => {
        async function detailss(){
            let response = await axios.get("http://localhost:3001/countries/" + params.id)
            let data = response.data
            setDetails(data)
        } detailss()
    }, [])

    return (
        <div className="detailTotal" >
            <div className="detailLink">
                <button>
                    <Link className="detailClick" to='/countries'>Back</Link>
                </button>
            </div>
            <div className="detailContainer">
                <div className="detailName">{details.name}</div>
                <img className="imagenn" src = {details.flag} alt="no" />
                <div className="detail">ID: {details.id}</div>
                <div className="detail">Continent: {details.continent}</div>
                <div className="detail">Subregion: {details.subregion}</div>
                <div className="detail">Capital: {details.capital}</div>
                <div className="detail">Area: {Number(details.area).toLocaleString()} km²</div>
                <div className="detail">Population: {Number(details.population).toLocaleString()}</div>
                <div className="detail">Tourist activities: {
                    details.activities ?
                    <ActivityDetails details={details.activities}/>
                    : <></>
                }</div>
            </div>
        </div>
    )
}
export default DetailCountry;