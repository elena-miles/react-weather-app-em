import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"; 


export default function WeatherForecast(props) {
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
