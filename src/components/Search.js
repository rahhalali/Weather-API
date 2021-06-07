import React from "react";
import "./Search.css";
const Search =(props)=> {
    return (
      <div className="app__header">
      <form onSubmit={props.getWeather}>
      <input type="Text" name="city" placeholder="Type a country name"></input> 
      <button className="btn">FIND WEATHER</button>
      </form>
     </div>
    );
  
}
export default Search;
