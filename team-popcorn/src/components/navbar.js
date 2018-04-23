import React from 'react';
import ReactDOM from 'react-dom';
import master from '../styles/master.css'
class Navbar extends React.Component{
render(){

  let navStyles ={
    display: "flex",
    flexDirection: "row",
    justifyContent:"flex-start",
    width:"100%",
    height: "3vh",
    backgroundColor: "#888"
  }
  return(
    <navbar style = {navStyles}>
    <p>G</p><p>G</p>
    </navbar>
  );

}
}
export default Navbar
