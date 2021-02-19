import React from "react";
import Date from "./Date";
import WeatherTemp from "./WeatherTemp";
import "./Info.css";


export default function Info(props) {

  return (
    <div className="Info">
      <div className="card-weather">
        
        <img className="emoji" src={props.data.icon} alt={""} /><p  className="Desc"> <strong> {props.data.description} </strong> </p>
        <WeatherTemp celsius={props.data.temperature}/>
        <Date />
        <div className="h-divider">
</div>
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