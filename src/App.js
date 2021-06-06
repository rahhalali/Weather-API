import React, { Component } from "react";
import Search from './components/Search';
import WeatherItem from './components/WeatherItem'
import ContentItem from './components/ContentItem'
import "./App.css";

class App extends Component {

  
  
  render() {
    return (
      <div className="app">
          <Search/>
             <div className="app__main">
             <div className="app__main_1">
           <WeatherItem/>
           <ContentItem/>
             </div>
             </div>
             </div>
     
    );
  }
}

export default App;
