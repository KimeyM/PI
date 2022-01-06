import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ActivityDetails from './ActivityDetails';
import './Detail.css';


const DetailCountry = () => {
    let params = useParams();

    const [details, setDetails] = useState({});

    useEffect(() => {
        async function detailss(){
            let response = await axios.get('http://localhost:3001/countries/' + params.id);
            let data = response.data;
            setDetails(data);
        } detailss();
    }, []);

    return (
        
        <div className="detailtotal" >
            <div className='countriesapp'>COUNTRIES APP</div>
            <div className='nav'>
                <div className="btn1">
                    <Link to = '/activity' style={{ textDecoration: 'none' }}>
                        <button className="bn3638 bn38">Create tourist activity</button>
                    </Link>
                </div>
                <div className="btn2">
                    <Link className="detailClick" style={{ textDecoration: 'none' }} to='/countries' >
                        <button className="bn3639 bn39" >Home</button>
                    </Link>
                </div>
            </div>

            <div className="detailContainer">
                <div className="detailName">{details.name}</div>
                <img className="imagenn" src = {details.flag} alt="no" />
                <div className="detail">
                   <a className="tit">ID:</a>  <a className="var">{details.id}</a> <br />
                   <a className="tit">Continent:</a> <a className="var">{details.continent}</a>   <br />
                   <a className="tit">Subregion:</a> <a className="var">{details.subregion}</a> <br />
                   <a className="tit">Capital:</a> <a className="var">{details.capital}</a> <br />
                   <a className="tit">Area:</a> <a className="var">{Number(details.area).toLocaleString()} km² </a><br />
                   <a className="tit">Population:</a> <a className="var">{Number(details.population).toLocaleString()} habitantes</a>
                </div>
            </div>

            <div className="acts">
                <a className="touract">Tourist activities</a>
                {
                    details.activities ?
                    <ActivityDetails details={details.activities}/>
                    : <></>
                }
            </div>
        </div>
    );
};
export default DetailCountry;