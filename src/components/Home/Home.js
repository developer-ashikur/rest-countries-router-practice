import React, { useEffect, useState } from 'react';
import Countries from '../Countries/Countries';
import './Home.css';

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, []);
    return (
        <div className='countries'>
            {
                countries.map(country => <Countries country={country} key={country.name}></Countries>)
            }
        </div>
    );
};

export default Home;