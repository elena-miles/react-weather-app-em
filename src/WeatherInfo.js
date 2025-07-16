

import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperatureUnit from "./WeatherTemperatureUnit";
import React from "react";

export default function WeatherInfo(props) {
return (
    <div className="weatherinfo">

        <h1 className="City">{props.data.city}</h1>

          <ul className="weather-details">
            <li className="day"><FormattedDate date={props.data.date}/></li>
            <li className="condition text-capitalize">{props.data.description}</li>
          </ul>
        
            <div className="row">
                <div className="col-6 weather-icon-display">
                <div className="d-flex">
                      <div className="icon-wrapper">
                      <WeatherIcon code={props.data.icon} size={52}/>
                      </div>
                      <div className="temp-wrapper">
                      < WeatherTemperatureUnit celcius={props.data.temperature} />
                      </div>
                </div>
            </div>

            <div className="col-6">
                    <ul>
                        <li>Precipitation:{" "}{props.data.precipitation}%</li>
                        <li>Humidity:{" "}{props.data.humidity}%</li>
                        <li>Wind:{" "}{props.data.wind}km/h</li>
                    </ul>
            </div>
    </div>
</div>
); 
}