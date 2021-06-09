import styled from 'styled-components'



export const Header=styled.div`
height:70px;
width: 100%;
background-color: hsl(226, 58%, 67%);
display: flex;
flex-direction: row;
transition:{background-color} 2s ease-in;
align-items: center;
padding-left: 2%;
animation-duration:4s;
@media(max-width:600px){
width: 100%;
background-color: #7C93DC;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding-left: 2%;
}
`
export const Form=styled.form`
  display: flex;
  flex-direction: row;
align-items: center;
`
export const Btn=styled.button`
background-color: hsl(244, 40%, 48%);
display: flex;
font-family:Raleway;
flex-direction: row;
justify-content: center;
border: none;
width: 150px;
padding: 2.5% 0.8%;
&:hover{
  cursor: pointer;
}

@media(max-width:600px){
  padding: 3%;
      background-color: #514AAB;
      border: none;
}
`
export const Input=styled.input`
  padding:0.9%;
  margin-right: 1%;
  font-size: 20px;
  border:0;
  background-color: transparent;
  color:white;
  font-weight: lighter;
  outline: none;
  ::placeholder{
    color:white;
    font-family:Raleway;
  }
  &:focus{
    border-bottom: 1px solid hsl(244, 40%, 48%);
      background: transparent;
  }
  @media(max-width=600px){
    font-size: 20px;
    border:0;
    background-color: transparent;
    color:white;
    font-weight: lighter;
    outline: none;
    
  }
`
 

  
    