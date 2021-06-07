import React, { Component } from "react";
import Search from './components/Search';
import WeatherItem from './components/WeatherItem'
import ContentItem from './components/ContentItem'
import weather from './data/fakeweather.json'

import "./App.css";

var Weather =weather.list;
var city1 =weather.city.name;
class App extends Component {
  state={
    dt:'',
    temp:'',
    humidty:'',
    tempMin:'',
    tempMax:'',
    pressure:'',
    description:'',
    temp_1:'',
    temp_2:'',
    temp_3:'',
    temp_4:'',
    temp_5:'',
    temp_6:'',
    temp_7:'',
  }
  caltotemp(number){
    let cal = (number -273.15).toFixed(2);
    return cal;
  }
  getWeather=(e)=>{
    e.preventDefault();
    const city =e.target.elements.city.value;
    if(city == city1){
      Weather.map(result=>{
       if(result.dt === 1487300400){
         this.setState({temp_1:this.caltotemp(result.main.temp)})
       }
       if(result.dt === 1487311200){
        this.setState({temp_2:this.caltotemp(result.main.temp)})
      }
      if(result.dt === 1487322000){
        this.setState({temp_3:this.caltotemp(result.main.temp)})
      }
      if(result.dt === 1487332800){
        this.setState({temp_4:this.caltotemp(result.main.temp)})
      }
      if(result.dt === 1487343600){
        this.setState({temp_5:this.caltotemp(result.main.temp)})
      }
      if(result.dt === 1487354400){
        this.setState({temp_6:this.caltotemp(result.main.temp)})
      }
      if(result.dt === 1487365200){
        this.setState({temp_7:this.caltotemp(result.main.temp)})
      }

        this.setState({
          dt:result.dt,
         temp:result.main.temp,
         humidity:result.main.humidity,
         tempMin:this.caltotemp(result.main.temp_min),
         tempmax:this.caltotemp(result.main.temp_max),
         pressure:result.main.pressure,
         description:result.weather[0].description,
          
})
      
    
    })
    }else
    if(city!=city1){
      this.setState({
        temp:'',
        humidty:'',
        description:'',
        tempMin:'',
        tempmax:'',
        pressure:'',
        description:'',
         temp_1:'',
         temp_2:'',
         temp_3:'',
         temp_4:'',
         temp_5:'',
         temp_6:'',
         temp_7:'',
      })
    }
    }
  

  render() {
    return (
      <div className="app" >
          <Search getWeather={this.getWeather}/>
             <div className="app__main">
             <div className="app__main_1">
           <WeatherItem 
           dt={this.state.dt}
           humidity={this.state.humidity}
           pressure={this.state.pressure}
           tempMin={this.state.tempMin}
           tempmax={this.state.tempmax}
           description={this.state.description}
           
           />
           <ContentItem
           temp_1={this.state.temp_1}
          temp_2={this.state.temp_2}
           temp_3={this.state.temp_3}
           temp_4={this.state.temp_4}
           temp_5={this.state.temp_5}
           temp_6={this.state.temp_6}
           temp_7={this.state.temp_7}
           />
             </div>
             </div>
             </div>
     
    );
  }
}

export default App;
