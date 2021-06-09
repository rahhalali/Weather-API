import React, { Component } from "react";
import Search from './components/Search';
import WeatherItem from './components/WeatherItem'
import ContentItem from './components/ContentItem'
import clear from "./img/weather-icons/clear.svg"
import cloudy from "./img/weather-icons/cloudy.svg"
import drizzle from "./img/weather-icons/drizzle.svg"
import fog from "./img/weather-icons/fog.svg"
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg"
import partlycloudy from "./img/weather-icons/partlycloudy.svg"
import rain from "./img/weather-icons/rain.svg"
import snow from "./img/weather-icons/snow.svg"
import storm from "./img/weather-icons/storm.svg"
import unknown from "./img/weather-icons/unknown.svg"
import {Main} from './App1.js';
const API_KEY="ff47fd20a55ff2b536cbd902b85ebb9e";

//import weather from './data/fakeweather.json'
// http://api.openweathermap.org/data/2.5/forecast?q=${this.state.searchInput}&cnt=8&units=metric&appid=${apiKey}
//var Weather =weather.list;
//var city1 =weather.city.name;


class App extends Component {
  state={
    temp:'',humidty:'',tempMin:'',tempMax:'',pressure:'',description:'',temp_1:'',temp_2:'',temp_3:'',temp_4:'',temp_5:'',temp_6:'',temp_7:'',img_1:'',img_2:'',img_3:'',img_4:'',img_5:'',img_6:'',img_7:'',img_8:'',status:'',error:''
        }
   getWeather=async(e)=>{
   e.preventDefault();
   const city =e.target.elements.city.value;
   const api =await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${API_KEY}`);
   const data =await api.json();
   var Result =data.list;
   console.log(Result);
    if(api.ok){
    Result.map(result=>{
      this.setState({
        temp:result.main.temp,
          humidity:result.main.humidity,
            tempMin:result.main.temp_min,
            tempmax:result.main.temp_max,
              pressure:result.main.pressure,
                description:result.weather[0].description,
                  error:''})
                if(result.dt_txt.split(" ")[1] === "03:00:00"){
                  this.setState({temp_1:result.main.temp});
                  if(result.weather[0].id < 300){
                    this.setState({img_2:storm})
                  }else if(result.weather[0].id < 499)
                  {
                    this.setState({img_2:drizzle})
                  }else if(result.weather[0].id < 599){
                    this.setState({img_2:rain})
                  }else if(result.weather[0].id < 699){
                    this.setState({img_2:snow})
                  }else if(result.weather[0].id < 799){
                    this.setState({img_2:fog})
                  }else if(result.weather[0].id == 800){
                    this.setState({img_2:clear})
                  }else if(result.weather[0].id == 801){
                    this.setState({img_2:partlycloudy})
                  }else if(result.weather[0].id > 801 && result.weather[0].id <805){
                    this.setState({img_2:mostlycloudy})
                  }}
                if(result.dt_txt.split(" ")[1] === "06:00:00"){
                  this.setState({temp_2:result.main.temp});
                  if(result.weather[0].id < 300){
                    this.setState({img_3:storm})
                  }else if(result.weather[0].id < 499)
                  {
                    this.setState({img_3:drizzle})
                  }else if(result.weather[0].id < 599){
                    this.setState({img_3:rain})
                  }else if(result.weather[0].id < 699){
                    this.setState({img_3:snow})
                  }else if(result.weather[0].id < 799){
                    this.setState({img_3:fog})
                  }else if(result.weather[0].id == 800){
                    this.setState({img_3:clear})
                  }else if(result.weather[0].id == 801){
                    this.setState({img_3:partlycloudy})
                  }else if(result.weather[0].id > 801 && result.weather[0].id <805){
                    this.setState({img_3:mostlycloudy})
                  }}
                if(result.dt_txt.split(" ")[1] === "09:00:00"){
                  this.setState({temp_3:result.main.temp});
                  if(result.weather[0].id < 300){
                    this.setState({img_4:storm})
                  }else if(result.weather[0].id < 499)
                  {
                    this.setState({img_4:drizzle})
                  }else if(result.weather[0].id < 599){
                    this.setState({img_4:rain})
                  }else if(result.weather[0].id < 699){
                    this.setState({img_4:snow})
                  }else if(result.weather[0].id < 799){
                    this.setState({img_4:fog})
                  }else if(result.weather[0].id == 800){
                    this.setState({img_4:clear})
                  }else if(result.weather[0].id == 801){
                    this.setState({img_4:partlycloudy})
                  }else if(result.weather[0].id > 801 && result.weather[0].id <805){
                    this.setState({img_4:mostlycloudy})
                  }}
                if(result.dt_txt.split(" ")[1] === "12:00:00"){
                  this.setState({temp_4:result.main.temp});
                  if(result.weather[0].id < 300){
                    this.setState({img_5:storm})
                  }else if(result.weather[0].id < 499)
                  {
                    this.setState({img_5:drizzle})
                  }else if(result.weather[0].id < 599){
                    this.setState({img_5:rain})
                  }else if(result.weather[0].id < 699){
                    this.setState({img_5:snow})
                  }else if(result.weather[0].id < 799){
                    this.setState({img_5:fog})
                  }else if(result.weather[0].id == 800){
                    this.setState({img_5:clear})
                  }else if(result.weather[0].id == 801){
                    this.setState({img_5:partlycloudy})
                  }else if(result.weather[0].id > 801 && result.weather[0].id <805){
                    this.setState({img_5:mostlycloudy})
                  }}
                if(result.dt_txt.split(" ")[1] === "15:00:00"){
                  this.setState({temp_5:result.main.temp});
                  if(result.weather[0].id < 300){
                    this.setState({img_6:storm})
                  }else if(result.weather[0].id < 499)
                  {
                    this.setState({img_6:drizzle})
                  }else if(result.weather[0].id < 599){
                    this.setState({img_6:rain})
                  }else if(result.weather[0].id < 699){
                    this.setState({img_6:snow})
                  }else if(result.weather[0].id < 799){
                    this.setState({img_6:fog})
                  }else if(result.weather[0].id == 800){
                    this.setState({img_6:clear})
                  }else if(result.weather[0].id == 801){
                    this.setState({img_6:partlycloudy})
                  }else if(result.weather[0].id > 801 && result.weather[0].id <805){
                    this.setState({img_6:mostlycloudy})
                  }}
                if(result.dt_txt.split(" ")[1] === "18:00:00"){
                  this.setState({temp_6:result.main.temp});
                  if(result.weather[0].id < 300){
                    this.setState({img_7:storm})
                  }else if(result.weather[0].id < 499)
                  {
                    this.setState({img_7:drizzle})
                  }else if(result.weather[0].id < 599){
                    this.setState({img_7:rain})
                  }else if(result.weather[0].id < 699){
                    this.setState({img_7:snow})
                  }else if(result.weather[0].id < 799){
                    this.setState({img_7:fog})
                  }else if(result.weather[0].id == 800){
                    this.setState({img_7:clear})
                  }else if(result.weather[0].id == 801){
                    this.setState({img_7:partlycloudy})
                  }else if(result.weather[0].id > 801 && result.weather[0].id <805){
                    this.setState({img_7:mostlycloudy})
                    }}
                if(result.dt_txt.split(" ")[1] === "21:00:00"){
                  this.setState({temp_7:result.main.temp});
                  if(result.weather[0].id < 300){
                    this.setState({img_8:storm})
                  }else if(result.weather[0].id < 499)
                  {
                    this.setState({img_8:drizzle})
                  }else if(result.weather[0].id < 599){
                    this.setState({img_8:rain})
                  }else if(result.weather[0].id < 699){
                    this.setState({img_8:snow})
                  }else if(result.weather[0].id < 799){
                    this.setState({img_8:fog})
                  }else if(result.weather[0].id == 800){
                    this.setState({img_8:clear})
                  }else if(result.weather[0].id == 801){
                    this.setState({img_8:partlycloudy})
                  }else if(result.weather[0].id > 801 && result.weather[0].id <805){
                    this.setState({img_8:mostlycloudy})
                    }}
                if(result.weather[0].id < 300){
                  this.setState({img_1:storm});
                  document.querySelector(".form_head").style.backgroundColor="blue";
                  document.querySelector(Main).style.backgroundColor="hsl(226, 40%, 40%)";
                }else if(result.weather[0].id < 49){
                  this.setState({img_1:drizzle});
                  document.querySelector(".form_head").style.backgroundColor="blue";
                  document.querySelector(Main).style.backgroundColor="hsl(226, 40%, 40%)";
                }else if(result.weather[0].id < 599){
                  this.setState({img_1:rain});
                document.querySelector(".form_head").style.backgroundColor="blue";
                document.querySelector(Main).style.backgroundColor="hsl(226, 40%, 40%)";
                }else if(result.weather[0].id < 699){
                    this.setState({img_1:snow});
                 document.querySelector(Main).style.backgroundColor="hsl(226, 40%, 40%)";
                 document.querySelector(".form_head").style.backgroundColor="blue";
                  }else if(result.weather[0].id < 799){
                    this.setState({img_1:fog});
                 document.querySelector(Main).style.backgroundColor="hsl(226, 58%, 67%)";
                 document.querySelector(".form_head").style.backgroundColor="hsl(226, 40%, 50%)";
                  }else if(result.weather[0].id == 800){
                    this.setState({img_1:clear});
                 document.querySelector(Main).style.backgroundColor="hsl(226, 58%, 67%)";
                 document.querySelector(".form_head").style.backgroundColor="hsl(226, 40%, 50%)";
                  }else if(result.weather[0].id == 801){
                    this.setState({img_1:partlycloudy});
                 document.querySelector(Main).style.backgroundColor="hsl(226, 58%, 67%)";
                 document.querySelector(".form_head").style.backgroundColor="hsl(226, 40%, 50%)";
                  }else if(result.weather[0].id > 801 && result.weather[0].id <805){
                    this.setState({img_1:mostlycloudy});
                    document.querySelector(Main).style.backgroundColor="hsl(226, 58%, 67%)";
                    document.querySelector(".form_head").style.backgroundColor="hsl(226, 40%, 50%)";
                  }})} 
                  else{
                  this.setState({temp:'',humidty:' ',description:'',tempMin:'',tempmax:'',pressure:'',description:''
                  ,temp_1:'',temp_2:'',temp_3:'',temp_4:'',temp_5:'',temp_6:'',temp_7:'',
                  img_1:unknown,img_2:unknown,img_3:unknown,img_4:unknown,img_5:unknown,img_6:unknown,img_7:unknown,img_8:unknown});
                  document.querySelector(".lon").style.backgroundColor="#9DCAF6";
                  document.querySelector(".FORM").style.backgroundColor="hsl(226, 58%, 67%)";
               }
            }            
render() {
   return (

      <div className="app"  >
          <Search getWeather={this.getWeather}/>
             <Main className="lon" >
               <div className="app__main_1">
           <WeatherItem   
                            img_1={this.state.img_1}
                              temp={this.state.temp}
                                humidity={this.state.humidity}
                                  pressure={this.state.pressure}
                                    tempMin={this.state.tempMin}
                                        tempmax={this.state.tempmax}
                                            description={this.state.description}
                                              error={this.state.error} />
           <ContentItem   
                            img_2={this.state.img_2}
                                img_3={this.state.img_3}
                                    img_4={this.state.img_4}
                                        img_5={this.state.img_5}
                                            img_6={this.state.img_6}
                                                img_7={this.state.img_7}
                                                  img_8={this.state.img_8}
                                                      temp_1={this.state.temp_1}
                                                        temp_2={this.state.temp_2}
                                                          temp_3={this.state.temp_3}
                                                            temp_4={this.state.temp_4}
                                                                temp_5={this.state.temp_5}
                                                                    temp_6={this.state.temp_6}
                                                                      temp_7={this.state.temp_7} />
                                                  </div>
                                                      </Main>
                                                     
                                                          </div>
     
    );
  }
}


export default App;