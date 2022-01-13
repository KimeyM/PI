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
                
                <div className="btn2">
                    <Link className="detailClick" style={{ textDecoration: 'none' }} to='/countries' >
                        <button className="bn3639 bn39" >Home</button>
                    </Link>
                </div>
            </div>

            <div className="detailContainer">
                <div className="nameflag">
                    <div className="detailName">{details.name}</div>
                    <img className="imagenn" src = {details.flag} alt="no" />
                </div>
            <div className="acts">
                <div className="touract">Tourist activities</div>
                {
                    details.activities ?
                    <ActivityDetails details={details.activities}/>
                    : <></>
                }
            </div></div>
        </div>
    );
};
export default DetailCountry;