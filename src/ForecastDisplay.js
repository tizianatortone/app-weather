import React from "react";
import "./ForecastDisplay.css";

export default function ForecastDisplay(props){

    function maxTemp(){
    let max = Math.round(props.data.temp.max);
    return `${max}ºC`
    }

    function minTemp(){
        let min = Math.round(props.data.temp.min);
        return `${min}ºC`
    }

    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }
    return (
        <div className="ForecastDisplay">
            <div>
           <h6>
                 {day()}
            </h6>
               <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt="weather" />
            <p>
            
              {maxTemp()} | {minTemp()}
            </p>
          </div>
          <div className="h-divider">
</div>
        </div>
    )
}