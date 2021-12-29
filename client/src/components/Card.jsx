import React from 'react';

export default function Card ({ flag, name, continent}) {
    return (
        <div>
        <h3>{name}</h3>
        <h5>{continent}</h5>
        <img src={flag} alt="img not found" width="200px" height="150px" />
        </div>
    );
}