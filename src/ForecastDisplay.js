import React from "react";

export default function ForecastDisplay(props){

function hours(){
let date = new Date (props.data.dt * 1000);
let hours = date.getHours();
return `${hours}:00`
}

function maxTemp(){
    let max = Math.round(props.data.main.temp_max);
    return `${max}ºC`
}

function minTemp(){
    let min = Math.round(props.data.main.temp_min);
    return `${min}ºC`
}
    return (
        <div className="card">
            <h6>
               {props.data.weather[0].icon} 
            </h6>
            <p>
              {hours()}<br />
              {maxTemp()} / {minTemp()}
            </p>
          </div>
    );
}