import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function Weather() { 
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
                <div className="col-12 col-md-6 weather-icon-display">
                <div className="d-flex align-items-center">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Weather Icon" className="me-1" />
                <span className="temperature">6</span><span className="temperature-unit">°C</span>
                </div>
            </div>

            <div className="col-12 col-md-6">
                    <ul>
                        <li>Precipitation: 0%</li>
                        <li>Humidity: 0%</li>
                        <li>Wind: 0 km/h</li>
                    </ul>
            </div>
            </div>
        </div>
); 
}