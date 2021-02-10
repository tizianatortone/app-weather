import React, { useState } from "react";
import "./Main.css";
import axios from "axios";

export default function Main() {
const [loaded, setLoaded] = useState(false);
const [info, setInfo] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setInfo({
      temperature: response.data.main.temp,
      min:response.data.main.temp_min,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
    let city= "Barcelona"
    let apiKey = "afeb02ebfbea916785c99a1a7504a564";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  if (loaded) {
  return (
    <div className="Main">
      <div className="card" id="main">
        <p className="Desc"> {info.description} </p>
        <img src={info.icon} alt={""} />
        <p id="today">
          <strong id="temperature"> {Math.round(info.temperature)}</strong>
          <sup className="degrees">
            {" "}
            <span href="#" target="_self" id="celsius-link" className="active">
              {" "}
              ºC{" "}
            </span>{" "}
            |{" "}
            <span href="#" target="_self" id="farenheit-link">
              {" "}
              ºF
            </span>{" "}
          </sup>
        </p>
        <p id="current-time">Saturday, 16 | 20:30</p>
        <p id="extraInfo">
          Min: {Math.round(info.min)}<span id="min"></span>º<br />
          Humidity: {info.humidity}%<span id="hum"></span>
          <br />
          Wind: {Math.round(info.wind)}<span id="speed"></span>km/hr
          <br />
        </p>
      </div>
    </div>
  ); } else { 
    const apiKey = "afeb02ebfbea916785c99a1a7504a564";
    let city = "Barcelona"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  
  }
}
