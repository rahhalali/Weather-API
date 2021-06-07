import React from "react";

import './WeatherItem.css'
const WeatherItem =(props)=> {
  
    return(
      <div className="app__main-1">
      <div className="app__main-1-1">
      <img src="http://placekitten.com/200/300 " alt=""/>
      </div>
      <div className="app__main-1-1-1-1"><p><span>{props.description}</span></p></div>
      <div className="app__main-1-1-1"><p><span>Temperature</span> {props.tempMin}&deg; to {props.tempmax}&deg;C</p></div>
      <div className="para" ><p><span>Humidity</span></p><p>{props.humidity}</p><p><span>Pressure</span></p><p>{props.pressure}</p> </div>
      </div>
    ) 
  
}
export default WeatherItem


