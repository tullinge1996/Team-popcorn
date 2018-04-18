import React from 'react';
import ReactDOM from 'react-dom';
import master from '../styles/master.css'
import Navbar from './navbar.js'
import Sidebar from './sidebar.js'
import Viewparent from './viewParent.js'
class Menuparent extends React.Component{
render(){

  let menuStyles ={
    display: "flex",
    flexDirection: "column",
    justifyContent:"space-between",
    width:"100%"
  }
  let midStyles ={
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between",
    width:"100%"
  }
  return(
    <div style = {menuStyles}>
    <Navbar />
      <div style = {midStyles}>
          <Sidebar />
          <Viewparent />
      </div>
    </div>
  );

}
}
export default Menuparent
