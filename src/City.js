import React, { useState } from "react";
import "./City.css";
import axios from "axios";

export default function City() {
  const [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setCity ({
      name: response.data.name,
      country: response.data.sys.country,
    });
  }

  if(loaded) {
  return (
    <div className="City">
      <div className="card" id="city">
        <h1>{city.name}</h1>
        <h4>{city.country}</h4>
      </div>
    </div>
  );} else {
let city = "Barcelona"
    let apiKey = "afeb02ebfbea916785c99a1a7504a564";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }
}