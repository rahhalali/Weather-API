import React ,{Component} from 'react'
import './ContentItem.css'

class ContentItem extends Component {
    render(){
        return(
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
        )
    }
}
export default ContentItem