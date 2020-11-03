import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import './Banner.elements.css';

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Banner = ({ fetchUrl }) => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            const randomMovies = request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ];

            setMovies(randomMovies);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    function truncate(str, n) {
        return (str?.length > n) ? str.substr(0, n - 1) + '&hellip;' : str;
    }

    console.log(movies);

    return (
        <header className="banner" style={{backgroundImage: `url("${baseUrl}${movies.backdrop_path}")`}}>
            <div className="banner__contents">
                <h1 className="banner__title">{movies?.title || movies?.name || movies?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button> 
                </div>
                <p className="banner__description">{truncate(movies?.overview, 180)}</p>
            </div>    

            <div className="banner__fade" />      
        </header>
    )
}

export default Banner
