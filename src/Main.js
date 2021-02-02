import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div className="Main">
      <div className="card" id="main">
        <p id="description"> Clear Sky</p>
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt=""
          id="emoji"
        />
        <p id="today">
          <strong id="temperature">17</strong>
          <sup className="degrees">
            {" "}
            <a href="#" target="_self" id="celsius-link" className="active">
              {" "}
              ºC{" "}
            </a>{" "}
            |{" "}
            <a href="#" target="_self" id="farenheit-link">
              {" "}
              ºF
            </a>{" "}
          </sup>
        </p>
        <p id="current-time">Saturday, 16 | 20:30</p>
        <p id="extraInfo">
          Min: 6<span id="min"></span>º<br />
          Humidity: 23%<span id="hum"></span>
          <br />
          Wind: 13<span id="speed"></span>km/hr
          <br />
        </p>
      </div>
    </div>
  );
}
