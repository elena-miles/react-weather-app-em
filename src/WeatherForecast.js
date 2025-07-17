import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const APIkey = "ffoa584b071af31b9db038336tec0bd6";
    const latitude = props.coordinates.lat;
    const longitude = props.coordinates.lon;
    const WeatherForecastURL = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${APIkey}&units=metric`;

    axios
      .get(WeatherForecastURL)
      .then((response) => {
        console.log("Forecast API response:", response.data);
        setForecast(response.data.daily);
      })
      .catch((error) => {
        console.log("API Error:", error.message);
      });
  }, [props.coordinates.lat, props.coordinates.lon]);

  if (!forecast) return null;

  return (
    <div className="WeatherForecast text-center">
      <div className="row">
        {forecast.slice(0, 5).map((dailyForecast, index) => (
          <div className="col" key={index}>
            <WeatherForecastDay data={dailyForecast} />
          </div>
        ))}
      </div>
    </div>
  );
}
