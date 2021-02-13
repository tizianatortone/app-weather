import React from "react";
import Main from "./Main";
import Info from "./Info";
import Forecast from "./Forecast";
import Github from "./Github";
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card" id="picture">
          <div className="row">
            <div className="col-6">
              <Main defaultCity="Barcelona" />
              <Info />
            </div>
            <div className="col-6">
              <Forecast />
            </div>
          </div>
        </div>
        <Github />
      </div>
    </div>
  );
}

