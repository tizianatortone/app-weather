import React from "react";

export default function completeDate() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let currentDay = days[now.getDay()];
  let dayNumber = now.getDate();
  let hour = now.getHours();
  if (hour < 10){ 
  hour = `0${hour}`
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
      minutes = `0${minutes}`
  }
  return(
      <div className="current-time">
       {currentDay}, {dayNumber} | {hour} : {minutes}   
      </div>
  )
}