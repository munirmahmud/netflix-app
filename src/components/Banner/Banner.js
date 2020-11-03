import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import requests from '../../request';
import './Banner.elements.css';

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            const randomMovies = request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ];

            setMovies(randomMovies);
            return request;
        }
        fetchData();
    }, []);

    console.log(movies);

    return (
        <header className="banner" style={{backgroundImage: `url("${baseUrl}${movies.backdrop_path}")`}}>
            <div className="banner__contents">
                <h1 className="banner__title">{movies?.title || movies?.name || movies?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button> 
                </div>
                <p className="banner__description">{movies?.overview}</p>
            </div>            
        </header>
    )
}

export default Banner
