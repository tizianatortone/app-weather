import React from "react";
import Date from "./Date";
import "./Info.css";


export default function Info(props) {

  return (
    <div className="Info">
      <div>
        <p className="Desc"> {props.data.description} </p>
        <img className="emoji" src={props.data.icon} alt={""} />
        <p className="today">
          <strong id="temperature"> {Math.round(props.data.temperature)}</strong>
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
        <span className="current-time">
        <Date />
        </span>
        <p className="extraInfo">
          Min: {Math.round(props.data.min)}<span id="min"></span>º<br />
          Humidity: {props.data.humidity}%<span id="hum"></span>
          <br />
          Wind: {Math.round(props.data.wind)}<span id="speed"></span>km/hr
          <br />
        </p>
      </div>
      <div className="card" id="city">
        <h1>{props.data.name}</h1>
        <h4>{props.data.country}</h4>
      </div>
      </div>

  );
}