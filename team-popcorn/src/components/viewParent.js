import React from 'react';
import ReactDOM from 'react-dom';
import master from '../styles/master.css'
import Shortcut from './shortcut'

class Viewparent extends React.Component{

render(){

  let viewStyles ={
    display: "flex",

    flexDirection: "row",
    justifyContent:"space-around",
    alignItems:"center",
    width:"98.5%",
    height:"96vh",
    backgroundColor:'#F8F8F8',
    flexWrap: "wrap"
  }


  return(
    <div style ={viewStyles}>
        <Shortcut label="Sales" submenu =" products"/>
        <Shortcut label="Sales" submenu =" products"/>
        <Shortcut label="Sales" submenu =" products"/>
        <Shortcut label="Sales" submenu =" products"/>
        <Shortcut label="Sales" submenu =" products"/>
        <Shortcut label="Sales" submenu =" products"/>
    </div>
  );

}
}
export default Viewparent
