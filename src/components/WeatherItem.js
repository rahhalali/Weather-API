import React from "react";

import {App_main,App_Span,Span_tem,App_1,App_2,App_P,App_Span_1,App_Main2,Span_temp2,Span_temp2_1} from './WeatherItem1.js'
const WeatherItem =(props)=> {
    return(
      <div className="app__main-1">
      <App_1>
      <img src={props.img_1} alt="" width="300px"/>
      </App_1>
      <App_main><p><App_Span>{props.description}</App_Span></p></App_main>
      <div className="app__main-1-1-1">{props.tempMin && props.tempmax && <p><Span_tem>Temperature </Span_tem> <App_Span_1>{props.tempMin}</App_Span_1>&deg;C to <App_Span_1>{props.tempmax}</App_Span_1>&deg;C</p>}</div>
      <div className="app_main_1">
        <App_2>
          { props.pressure &&
        <App_P><Span_temp2>Humidity</Span_temp2><Span_temp2_1>{props.humidity}%</Span_temp2_1></App_P>
          }
      { props.pressure &&
       <App_P><Span_temp2>Pressure</Span_temp2><Span_temp2_1>{props.pressure}</Span_temp2_1></App_P>
      }
        </App_2>
         </div>
      <App_Main2>{props.error}</App_Main2>
      </div>
    ) 
  
}
export default WeatherItem


