import React, { Component } from "react";

import './WeatherItem.css'
class WeatherItem extends Component {
  render() {
    return(
      <div className="app__main-1">
      <div className="app__main-1-1">
      <img src="http://placekitten.com/200/300"/>
      </div>
      <div className="app__main-1-1-1"><p><span>Temperature</span> 10&deg; to 11&deg;C</p></div>
      <div className="para"><p><span>Humidity</span></p><p>76%</p><p><span>Pressure</span></p><p>100848</p> </div>
      </div>
    ) 
  }
}
export default WeatherItem


