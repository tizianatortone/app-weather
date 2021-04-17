import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDisplay from "./ForecastDisplay";
import "./Forecast.css";

export default function Forecast (props) {
    const [loaded, setLoaded] = useState (false);
    const [forecast, setForecast] = useState (null);

useEffect(()=>{
  setLoaded(false)
}, [props.coordinates])

    function handleResponse (response){
    setForecast(response.data.daily);
     setLoaded(true);
    }

    function load(){
      const apiKey= "afeb02ebfbea916785c99a1a7504a564";
let longitude= props.coordinates.lon;
let latitude= props.coordinates.lat;
let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);
    }
    
if(loaded) {
    return (
         <div className="Forecast">
       <section>
         {forecast.map(function (dailyForecast, index) {
           if (index < 4){
           return (
          <div key={index}>
            <ForecastDisplay data={dailyForecast} />
            
          </div>
          
           );
           } else {
             return null
           }
         })}


        </section>
      </div>
    );


} else {

load()

return null
}
}