import React from 'react';
import '../weatherApp/WeatherApp.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';

const WeatherApp = () => {
  return (
    <div className='container'>
        <div className='top-bar'>
            <input type="text" className="cityInput" placeholder='search' />
            <div className="search_icon">
              <img src={search_icon} alt='loading'></img>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp