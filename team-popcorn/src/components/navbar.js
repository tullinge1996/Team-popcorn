import React from 'react';
import ReactDOM from 'react-dom';
import master from '../styles/master.css'
import Icon from './icon.js'
class Navbar extends React.Component{
render(){

  let navStyles ={
    display: "flex",
    flexDirection: "row",
    justifyContent:"flex-start",
    width:"100%",
    height: "4vh",
    backgroundColor: "teal",
    alignItems: "center",
  }
  return(
    <navbar style = {navStyles}>
      <button onClick={alert}><Icon iconName = "fa fa-bell" /></button>
      <button onClick={alert}><Icon iconName = "fa fa-exclamation-circle" /></button>
    </navbar>
  );

}
}
export default Navbar
