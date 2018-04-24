import React from 'react';
import ReactDOM from 'react-dom';
import master from '../styles/master.css'

export default class Shortcut extends React.Component{
render(){
  let shortcutStyle ={
    width:"30%",
    height:"30vh",
    textAlign:"center"

  }
  return(
    <div style =  {shortcutStyle}>
      <h2>{this.props.label}</h2>
      <h1>{this.props.submenu}</h1>
    </div>
  );

}
}
