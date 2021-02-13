import React from "react";
import Date from "./Date";
import "./Info.css";


export default function Info(props) {

  return (
    <div className="Info">
      <div className="card-weather">
        <p className="Desc"> {props.data.description} </p>
        <img className="emoji" src={props.data.icon} alt={""} />
        <p className="today">
          <strong className="temp"> {Math.round(props.data.temperature)}</strong>
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
          Min: {Math.round(props.data.min)}º
          <br />
          Humidity: {props.data.humidity}%
          <br />
          Wind: {Math.round(props.data.wind)}km/hr
          <br />
        </p>
      </div>
      <div className="card-city">
        <h1>{props.data.name}</h1>
        <h4>{props.data.country}</h4>
      </div>
      </div>

  );
}