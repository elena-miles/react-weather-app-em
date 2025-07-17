import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "CLOUDY",
    "scattered-clouds-night": "CLOUDY",
    "broken-clouds-day": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "SLEET",
    "thunderstorm-night": "SLEET",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG",
  };

  const iconCode = props.code?.trim();
  const animatedIcon = codeMapping[iconCode] || "CLEAR_DAY";

  return (
    <ReactAnimatedWeather
      icon={animatedIcon}
      color="#1e90ff"
      size={props.size || 52}
      animate={true}
    />
  );
}
