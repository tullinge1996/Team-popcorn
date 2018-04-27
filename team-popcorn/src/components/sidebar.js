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
    backgroundColor: "teal",
    alignItems: "center"
  }
  return(
    <navbar style = {sideStyles}>

      <button  onClick={alert}><Icon iconName = "fa fa-bar-chart"/></button>
      <button onClick={alert}><Icon iconName = "fa fa-database"/></button>
    </navbar>
  );

}
}
export default Sidebar
