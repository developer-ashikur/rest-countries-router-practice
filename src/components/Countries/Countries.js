import React from 'react';
import { Link } from 'react-router-dom';
import './Countries.css';

const Countries = ({country}) => {
    const {name, region} = country;
    return (
        <div className='country'>
            <h3>Name: {name} </h3>
            <h5>Region: {region} </h5>
            <Link to={`/country/${name}`}><button>Show Details</button></Link>
        </div>
    );
};

export default Countries;