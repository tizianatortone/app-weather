import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState(null);

function displayForecast(response) {
setForecast(response.data)
 setLoaded(true);
  }

  if (loaded){
    return (
    <div className="Forecast">
      <div className="col-6">
        <section className="card-group">
          <div className="card">
            <h6>
              <img src="http://openweathermap.org/img/wn/01n@2x.png" alt="" />
            </h6>
            <p>
              23:00 <br />
              9ºC / 8ºC
            </p>
          </div>{" "}
          <br />
          <div className="card">
            <h6>
              <img src="http://openweathermap.org/img/wn/01n@2x.png" alt="" />
            </h6>
            <p>
              02:00 <br />
              8ºC / 8ºC
            </p>
          </div>{" "}
          <br />
          <div className="card">
            <h6>
              <img src="http://openweathermap.org/img/wn/02n@2x.png" alt="" />
            </h6>
            <p>
              05:00 <br />
              8ºC / 8ºC
            </p>
          </div>{" "}
          <br />
          <div className="card">
            <h6>
              <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
            </h6>
            <p>
              08:00 <br />
              7ºC / 7ºC
            </p>
          </div>{" "}
        </section>
      </div>
    </div>
  );
  } else{
let apiKey = "afeb02ebfbea916785c99a1a7504a564";
let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
  return null
  }

}

