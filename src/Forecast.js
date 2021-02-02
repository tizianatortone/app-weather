import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="col-6" id="forecast">
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
}
