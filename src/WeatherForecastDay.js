import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={34} />
      <div className="Forecast-temps">
        <span className="Forecast-temp-max">{maxTemperature()}</span>
        <span className="Forecast-temp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
