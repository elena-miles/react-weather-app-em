import React, { useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"; 
import axios from "axios";


export default function WeatherForecast(props) {
function handleResponse (response) {
}

useEffect(() => {
    let APIkey="ffoa584b071af31b9db038336tec0bd6";
    let latitude = props.coordinates.lat; 
    let longitude = props.coordinates.lon;
    let WeatherForecastURL = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${APIkey}&units=metric`;
    axios
    .get(WeatherForecastURL)
    .then(handleResponse)
    .catch((error) => {
      console.log("API Error:", error.message);
    });
}, [props.coordinates.lat, props.coordinates.lon]);

    return (
        <div className="WeatherForecast text-center">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day text-center">day</div>
                    <WeatherIcon code="01d" size={30}/> 
                    <div className="WeatherForecast-temperature">
                        <span className="WeatherForecast-temperature-max">20°</span>
                        <span className="WeatherForecast-temperature-min">10°</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

