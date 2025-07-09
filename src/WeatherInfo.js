import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
    <div className="weatherinfo">

        <h1 className="City">{props.data.city}</h1>

          <ul className="weather-details">
            <li className="day"><FormattedDate date={props.data.date}/></li>
            <li className="condition text-capitalize">{props.data.description}</li>
          </ul>
        
            <div className="row">
                <div className="col-12 col-sm-6 weather-icon-display">
                <div className="d-flex">

                <div className="me-1 icon-wrapper">
                <WeatherIcon code={props.data.icon} />
                </div>
            
                <span className="temperature">{Math.round(props.data.temperature)}</span>
                <span className="temperature-unit mt-3">°C</span>
                </div>
            </div>

            <div className="col-12 col-sm-6">
                    <ul>
                        <li>Precipitation:{" "}{props.data.precipitation}%</li>
                        <li>Humidity:{" "}{props.data.humidity}%</li>
                        <li>Wind:{" "}{props.data.wind.speed}km/h</li>
                    </ul>
            </div>
    </div>
</div>
); 
}