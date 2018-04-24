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
    backgroundColor: "#888",
    alignItems: "center",
  }
  return(
    <navbar style = {navStyles}>
      <Icon iconName = "fa fa-bell" />
      <Icon iconName = "fa fa-exclamation-circle" />
    </navbar>
  );

}
}
export default Navbar
