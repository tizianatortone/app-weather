import React, { useState } from "react";
import axios from "axios";
import ForecastDisplay from "./ForecastDisplay";
import "./Forecast.css";

export default function Forecast(props) {
const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState(null);

function displayForecast(response) {
setForecast(response.data)
 setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name){
    return ( 
    <div className="Forecast">
        <section className="card-group">
          <ForecastDisplay data={forecast.list[0]} />
          
          <br />
          <div className="card">
            <ForecastDisplay data={forecast.list[1]} />
            
          </div>{" "}
          <br />
          <div className="card">
            <ForecastDisplay data={forecast.list[2]} />
            </div>
          <br />
          <div className="card">
            <ForecastDisplay data={forecast.list[3]} />
          </div>{" "}
        </section>
      </div>
    
  );
  } else{
let apiKey = "afeb02ebfbea916785c99a1a7504a564";
let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
  return null
  }

}

