import React from 'react';
import ReactDOM from 'react-dom';
import master from '../styles/master.css'

export default class Icon extends React.Component{
render(){
  let iconStyles ={
      fontSize:"20px",
      color: "white",
  }
  return(
    <div>
      <i className={this.props.iconName} style =  {iconStyles}></i>
    </div>
  );

}
}
