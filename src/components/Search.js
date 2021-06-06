import React from "react";
import "./Search.css";
const Search =()=> {
    return (
      <div className="app__header">
      <input type="Text" placeholder="Type a country name"></input> 
      <button className="btn">FIND WEATHER</button>
     </div>
    );
  
}
export default Search;
