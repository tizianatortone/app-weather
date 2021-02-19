import React from "react";
import "./ForecastDisplay.css"

export default function ForecastDisplay(props){

function hours(){
let date = new Date (props.data.dt * 1000);
let hours = date.getHours();
return `${hours}:00`
}

function maxTemp(){
    let max = Math.round(props.data.main.temp);
    return `${max}ºC`
}


    return (
        <div className="ForecastDisplay">
       
            <h6>
                 {hours()}
            </h6>
               <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt="weather" />
            <p>
            
              {maxTemp()}
            </p>
          </div>
    );
}