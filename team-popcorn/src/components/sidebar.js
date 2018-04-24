import React from 'react';
import ReactDOM from 'react-dom';
import master from '../styles/master.css'
import Icon from './icon.js'
class Sidebar extends React.Component{
render(){
  let sideStyles ={
    display: "flex",
    flexDirection: "column",
    justifyContent:"flex-start",
    width:"2%",
    height: "96vh",
    backgroundColor: "#888",
    alignItems: "center"
  }
  return(
    <navbar style = {sideStyles}>

      <Icon iconName = "fa fa-bar-chart"/>
      <Icon iconName = "fa fa-database"/>
    </navbar>
  );

}
}
export default Sidebar
