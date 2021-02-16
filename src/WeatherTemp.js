import React, { useState } from "react";

export default function WeatherTemp(props) {
    const [unit, setUnit] = useState(`celsius`);


    function convertToFahrenheit (event){
        event.preventDefault();
        setUnit(`fahrenheit`);
    }

    function convertToCelsius (event) {
        event.preventDefault ();
        setUnit(`celsius`);
    }

    function fahrenheit(){
      return (props.celsius * 9 / 5) + 32 
    }

    if (unit === `celsius`) {
    return (
        <p className="today">
          <strong className="temp"> {Math.round(props.celsius)}</strong>
          <sup className="degrees">
            {" "}
            <span href="/" target="_self"  className="active">
              {" "}
              ºC{" "}
          
            |{" "}
             <a href="/" target="_self"  onClick={convertToFahrenheit}>ºF</a>
            </span>{" "}
          </sup>
        </p>
    )
    } else {
    
        return (
           <p className="today">
          <strong className="temp"> {Math.round(fahrenheit())}</strong>
          <sup className="degrees">
            {" "}
            <span className="active">
              {" "}
              <a href="/" target="_self"  onClick={convertToCelsius}>ºC</a>{" "}
            |{" "}
             ºF
            </span>
          </sup>
        </p> 
        )
    }

}