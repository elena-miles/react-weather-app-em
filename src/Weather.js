import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";


export default function Weather() { 
    const [weatherData, setWeatherData] = useState({});//empty object to store weather data
    const [loading, setLoading] = useState(false);
    const [city] = useState("London"); //default city

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            city: response.data.name,
            temperature: response.data.main.temp,
            wind: response.data.wind,
            description: response.data.weather[0].description,
            precipitation: response.data.clouds.all,
            humidity: response.data.main.humidity,
        });
    
        setLoading(true);
    }

    if (loading) {
    return (
            <div className="Weather">

        <form className="form mx-auto mb-2" style={{ maxWidth: "450px" }}>
            <div className="row  g-1">
                <div className="col-12 col-md-9">
                <input type="search" className="form-control" placeholder="Enter a city..." autoFocus="on" />
                </div>
                <div className="col-8 mx-auto col-md-3">
                <button type="submit" className="btn btn-primary w-100" value="Search">Search</button>
               </div>
            </div>
        </form>

          <h1 className="City">{weatherData.city}</h1>

          <ul className="Weather-details">
            <li><span className="Day">Day</span>,{" "}<span className="Time">time</span></li>
            <li className="Condition">{weatherData.description}</li>
          </ul>
        
            <div className="row">
                <div className="col-12 col-sm-6 weather-icon-display">
                <div className="d-flex">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Weather Icon" className="me-1" />
                <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="temperature-unit mt-3">°C</span>
                </div>
            </div>

            <div className="col-12 col-sm-6">
                    <ul>
                        <li>Precipitation:{" "}{weatherData.precipitation}%</li>
                        <li>Humidity:{" "}{weatherData.humidity}%</li>
                        <li>Wind:{" "}{weatherData.wind.speed}km/h</li>
                    </ul>
            </div>
            </div>
        </div>
); 
    } else {
    const APIkey="ac209dae1f283fb332a5bb7f50b0f468";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading..."; // Display a loading message while fetching data could add a slider or spinner here
    }           
}