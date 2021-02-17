import React from "react";
import Main from "./Main";
import Forecast from "./Forecast";
import Github from "./Github";
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card" id="picture">
              <Main defaultCity="Barcelona" />
            </div>
          </div>
        <Github />
      </div>

  );
}

