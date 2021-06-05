import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  
  state ={
    name:'ali rahhal'
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <SayHi />
        <SayHello color="purple" name={this.state.name} />
        <Search handleInput={this.handleInputChange} />
      </div>
    );
  }
}

export default App;
