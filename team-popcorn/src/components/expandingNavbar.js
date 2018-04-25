import React from 'react';
import ReactDOM from 'react-dom';
import master from '../styles/master.css'
import Icon from './icon.js'

 var sideStyles ={
  display: "flex",
  flexDirection: "column",
  justifyContent:"flex-start",
  width:"2%",
  height: "96vh",
  backgroundColor: "#888",
  alignItems: "center",
  display:"none"
}
export default class Expandingnavbar extends React.Component{
render(){

  return(
    <navbar style =  {sideStyles}>

      <button  onClick={alert}><Icon iconName = "fa fa-bar-chart"/></button>
      <button onClick={alert}><Icon iconName = "fa fa-database"/></button>
    </navbar>
  );

}
}
