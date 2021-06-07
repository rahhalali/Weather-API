import React from 'react'
import './ContentItem.css'

 const ContentItem =(props)=> {
    
        return(
            <div className="app__main-2">
            <div className="app_main-2-1 pic">
              <p>03:00</p>
              <div className="main_img">
              <img src="http://placekitten.com/200/300" alt="" width="100%" />
              </div>
              <p>{props.temp_1}&deg;C</p>
            </div>

            <div className="app_main-2-1 pic">
              <p>06:00</p>
              <div>
              <img src="http://placekitten.com/200/300" alt="" width="100%"/>
              </div>
              <p>{props.temp_2}&deg;C</p>
            </div>

            <div className="app_main-2-1 pic">
              <p>09:00</p>
              <div>
              <img src="http://placekitten.com/200/300" alt="" width="100%"/>
              </div>
              <p>{props.temp_3}&deg;C</p>
            </div>

            <div className="app_main-2-1 pic">
              <p>12:00</p>
              <div>
              <img src="http://placekitten.com/200/300" alt="" width="100%"/>
              </div>
              <p>{props.temp_4}&deg;C</p>
            </div>

            <div className="app_main-2-1 pic">
              <p>15:00</p>
              <div>
              <img src="http://placekitten.com/200/300" alt="" width="100%"/>
              </div>
              <p>{props.temp_5}&deg;C</p>
            </div>

            <div className="app_main-2-1 pic">
              <p>18:00</p>
              <div>
              <img src="http://placekitten.com/200/300" alt="" width="100%"/>
              </div>
              <p>{props.temp_6}&deg;C</p>
            </div>

            <div className="app_main-2-1 pic">
              <p>21:00</p>
              <div>
              <img src="http://placekitten.com/200/300" alt="" width="100%"/>
              </div>
              <p>{props.temp_7}&deg;C</p>
            </div>

          </div>
        )
    
}
export default ContentItem