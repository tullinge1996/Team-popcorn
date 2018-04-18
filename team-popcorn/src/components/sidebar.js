import React from 'react';
import ReactDOM from 'react-dom';
import master from '../styles/master.css'
class Sidebar extends React.Component{
render(){
  let sideStyles ={
    display: "flex",
    flexDirection: "column",
    justifyContent:"flex-start",
    width:"1.5%",
    height: "97vh",
    backgroundColor: "#888"
  }
  return(
    <navbar style = {sideStyles}>
    <p>G</p><p>2</p>
    </navbar>
  );

}
}
export default Sidebar
