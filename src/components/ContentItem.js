import React from 'react'
import './ContentItem.css'

 const ContentItem =(props)=> {
    
        return(
            <div className="app__main-2">
            <div className="app_main-2-1 pic">
              {props.temp_1 &&
              <p>03:00</p>
              }
              <div className="main_img">
              <img src={props.img_2} alt="" width="100%" />
              </div>
              {props.temp_1 &&
              <p>{props.temp_1}&deg;C</p>
              }
            </div>

            <div className="app_main-2-1 pic">
            {props.temp_2 &&
              <p>06:00</p>
              }
              <div>
              <img src={props.img_3} alt="" width="100%"/>
              </div>
              {props.temp_2 && <p>{props.temp_2}&deg;C</p>}
              
            </div>

            <div className="app_main-2-1 pic">
            {props.temp_3 &&
              <p>09:00</p>
              }
              <div>
              <img src={props.img_4} alt="" width="100%"/>
              </div>
              {props.temp_3 && <p>{props.temp_3}&deg;C</p>}
            </div>

            <div className="app_main-2-1 pic">
            {props.temp_4 &&
              <p>12:00</p>
              }
              <div>
              <img src={props.img_5} alt="" width="100%"/>
              </div>
              {props.temp_4 && <p>{props.temp_4}&deg;C</p>}
            </div>

            <div className="app_main-2-1 pic">
            {props.temp_5 &&
              <p>15:00</p>
              }
              <div>
              <img src={props.img_6} alt="" width="100%"/>
              </div>
              {props.temp_5 && <p>{props.temp_5}&deg;C</p>}
            </div>

            <div className="app_main-2-1 pic">
            {props.temp_6 &&
              <p>18:00</p>
              }
              <div>
              <img src={props.img_7} alt="" width="100%"/>
              </div>
              {props.temp_6 && <p>{props.temp_6}&deg;C</p>}
            </div>

            <div className="app_main-2-1 pic">
            {props.temp_7 &&
              <p>21:00</p>
              }
              <div>
              <img src={props.img_8} alt="" width="100%"/>
              </div>
              {props.temp_7 && <p>{props.temp_7}&deg;C</p>}
            </div>

          </div>
        )
    
}
export default ContentItem