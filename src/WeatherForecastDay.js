import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastDay(props) {
  const data = props.data;
  
    if (
      !data ||
      !data.temperature ||
      !data.condition ||
      !data.condition.icon
    ) {
      return null;
    }
  
    function day() {
      let date = new Date(data.time * 1000); // `time` instead of `dt`
      let dayIndex = date.getDay();
      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return days[dayIndex];
    }
  
    return (
      <div className="clearfix">
        <div className="WeatherForecast-day text-center">{day()}</div>
        <WeatherIcon code={props.data.condition.icon} size={30} alt={props.data.condition.description}/>
        <div className="WeatherForecast-temperature">
          <span className="WeatherForecast-temperature-max">
            {Math.round(data.temperature.maximum)}°
          </span>
          <span className="WeatherForecast-temperature-min">
            {Math.round(data.temperature.minimum)}°
          </span>
        </div>
      </div>
    );
  }