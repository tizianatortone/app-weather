import React, { useState } from "react";
import Info from "./Info";
import Forecast from "./Forecast";
import "./Main.css";
import axios from "axios";

export default function Main(props) {
const [info, setInfo] = useState({ ready: false});
const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setInfo({
      ready: true,
      temperature: response.data.main.temp,
      min:response.data.main.temp_min,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      name: response.data.name,
      country: response.data.sys.country,
    });
  }
  function search(){

    let apiKey = "afeb02ebfbea916785c99a1a7504a564";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);

  }

  function handleSubmit(event){
    event.preventDefault()
    search()
  }

  function changeCity(event){
   setCity(event.target.value)
  }

  if (info.ready) {
  return (

    <div className="row">
        <div className="col-6">
      <div className="Main">
 <Info data={info} />
 <div>
 <span>
        <button className="standing">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-geo-alt"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 0 0 3 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 0 0 8 14.58l.208-.22a31.493 31.493 0 0 0 1.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
            />
            <path
              fillRule="evenodd"
              d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            />
          </svg>
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="change-city"
            placeholder="  Enter a city..."
            onChange={changeCity}
          />
          <button className="search" type="submit" value="search">
            {" "}
            Search{" "}
          </button>
        </form>
      </span>
      </div>
      </div>
      </div>
    <div className="col-6">
 <Forecast city={info.name}/>
      </div>
    </div>
    
  ); } else { 
    search()
  }return null;
}
