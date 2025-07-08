import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";


export default function Weather() { 
    // State variables to hold weather data 
    const [Temperature, setTemperature] = useState(null);
    const [Loading, setLoading] = useState(false);


    function handleResponse(response) {
        console.log(response.data);
        setTemperature(response.data.main.temp);
        setLoading(true);
    }

    const APIkey="ac209dae1f283fb332a5bb7f50b0f468";
    const [city, setCity] = useState("London"); // Default city
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

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

          <h1 className="City">City</h1>

          <ul className="Weather-details">
            <li><span className="Day">Day</span>,{" "}<span className="Time">Time</span></li>
            <li className="Condition">Condition</li>
          </ul>
        
            <div className="row">
                <div className="col-12 col-sm-6 weather-icon-display">
                <div className="d-flex">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Weather Icon" className="me-1" />
                <span className="temperature">{Math.round(temperature)}</span><span className="temperature-unit mt-3">°C</span>
                </div>
            </div>

            <div className="col-12 col-sm-6">
                    <ul>
                        <li>Precipitation:{" "}{}%</li>
                        <li>Humidity:{" "}{}%</li>
                        <li>Wind:{" "}{}km/h</li>
                    </ul>
            </div>
            </div>
        </div>
); 
}