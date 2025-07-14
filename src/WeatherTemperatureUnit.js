import React, { useState } from "react";

export default function WeatherTemperatureUnit(props) {
    const [unit, setUnit] = useState("celsius");
  
    function handleFahrenheitClick(event) {
      event.preventDefault();
      setUnit("fahrenheit");
    }
  
    function handleCelsiusClick(event) {
      event.preventDefault();
      setUnit("celsius");
    }
  
    function fahrenheit() {
      return (props.celcius * 9) / 5 + 32;
    }
  
    if (unit === "celsius") {
      return (
        <div>
          <span className="temperature">{Math.round(props.celcius)}</span>
          <div className="WeatherTemperatureUnit d-inline">
            <span className="temperature-unit">°C |{""}
            <a href="/" onClick={handleFahrenheitClick}> °F </a>
           
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <span className="temperature">{Math.round(fahrenheit())}</span>
          <div className="WeatherTemperatureUnit d-inline">
            <span className="temperature-unit">°F |{""}
            <a href="/" onClick={handleCelsiusClick}>°C</a>
            </span>
          </div>
        </div>
      );
    }
  }
