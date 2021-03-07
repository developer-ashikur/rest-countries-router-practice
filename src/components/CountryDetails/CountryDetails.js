import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CountryDetails.css';

const CountryDetails = () => {
    const {name} = useParams();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    },[name]);
    const {capital, area, population, region, subregion, flag} = country;
    return (
        <div className='country-details'>
            <img src={flag} alt=""/>
            <h3>Name: {name} </h3>
            <h3>Capital: {capital} </h3>
            <h3>Area: {area} </h3>
            <h3>Population: {population} </h3>
            <h3>Region: {region} </h3>
            <h3>Subregion: {subregion} </h3>
        </div>
    );
};

export default CountryDetails;