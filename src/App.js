import React, { Component } from "react";
import "./App.css";

class App extends Component {
  
  render() {
    return (
      <div className="app">
        <div className="app__header">
         <input type="Text" placeholder="Type a country name"></input> 
         <button className="btn">FIND WEATHER</button>
        </div>
        <div className="app__main">
          <div className="app__main_1">
            <div className="app__main-1">
            <div className="app__main-1-1">
            <img src="http://placekitten.com/200/300"/>
            </div>
            <div className="app__main-1-1-1"><p><span>Temperature</span> 10&deg; to 11&deg;C</p></div>
            <div className="para"><p><span>Humidity</span></p><p>76%</p><p><span>Pressure</span></p><p>100848</p> </div>
            </div>
            <div className="app__main-2">
              <div className="app_main-2-1 pic">
                <p>03:00</p>
                <div className="main_img">
                <img src="http://placekitten.com/200/300" width="100%" />
                </div>
                <p>8&deg;C</p>
              </div>

              <div className="app_main-2-1 pic">
                <p>06:00</p>
                <div>
                <img src="http://placekitten.com/200/300" width="100%"/>
                </div>
                <p>9&deg;C</p>
              </div>

              <div className="app_main-2-1 pic">
                <p>09:00</p>
                <div>
                <img src="http://placekitten.com/200/300" width="100%"/>
                </div>
                <p>14&deg;C</p>
              </div>

              <div className="app_main-2-1 pic">
                <p>12:00</p>
                <div>
                <img src="http://placekitten.com/200/300" width="100%"/>
                </div>
                <p>17&deg;C</p>
              </div>

              <div className="app_main-2-1 pic">
                <p>15:00</p>
                <div>
                <img src="http://placekitten.com/200/300" width="100%"/>
                </div>
                <p>18&deg;C</p>
              </div>

              <div className="app_main-2-1 pic">
                <p>18:00</p>
                <div>
                <img src="http://placekitten.com/200/300" width="100%"/>
                </div>
                <p>16&deg;C</p>
              </div>

              <div className="app_main-2-1 pic">
                <p>21:00</p>
                <div>
                <img src="http://placekitten.com/200/300" width="100%"/>
                </div>
                <p>13&deg;C</p>
              </div>

            </div>

          </div>
         
          </div>
        </div>
     
    );
  }
}

export default App;
