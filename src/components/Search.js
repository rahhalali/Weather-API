import React from "react";
import {Header ,Input,Btn,Form} from "./Search1.js";
const Search =(props)=> {
    return (
      <Header className="form_head FORM">
      <Form onSubmit={props.getWeather} autoComplete="off" >
      <Input type="Text" name="city" placeholder="Type in a city name"></Input> 
      <Btn>FIND WEATHER</Btn>
      </Form>
     </Header>
    );
  
}
export default Search;
