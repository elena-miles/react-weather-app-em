
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import './Weather.css';
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) { 

const [weatherData, setWeatherData] = useState({ready: false});
 const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            time: new Date(response.data.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            date: new Date(response.data.dt * 1000),
            city: response.data.name,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            precipitation: response.data.clouds.all,
            humidity: response.data.main.humidity,
            icon: response.data.weather[0].icon.trim()
        });
    }
    function search() {
        if (city) {
            const APIkey="ac209dae1f283fb332a5bb7f50b0f468";
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${APIkey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
    }
    }
    function handleSubmit(event) {
        event.preventDefault();
       search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    useEffect(() => {
        search();
      }, []);

    return (
        <div className="Weather">

            <form className="form mb-2" style={{ maxWidth: "450px" }} onSubmit={handleSubmit}>
                <div className="row g-1">
                    <div className="col-9 mx-auto">
                        <input type="search" className="form-control" placeholder="Enter a city..." autoFocus="on" onChange={handleCityChange}/>
                    </div>

                    <div className="col-3">
                        <button type="submit" className="btn btn-primary w-100" value="Search">Search</button>
                    </div>
                </div>
            </form>

            <WeatherInfo data={weatherData}/>
    
        </div>
);       
}