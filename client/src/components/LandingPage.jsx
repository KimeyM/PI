import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"

export default function LandingPage(){
    return(
        <div className="landing">
            <h1>Countries App</h1>
            <Link to='/countries' style={{ textDecoration: 'none' }}>
                <button className="bn3637 bn36">Start</button>
            </Link>
        </div>
    )
}