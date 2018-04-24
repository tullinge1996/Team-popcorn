import React,{Component} from "react";
import "../App.css";



class SideBar extends Component {
  render(){
    var iconStyle={
      paddingTop:"5px",
      paddingBottom:"12px",

    }
    var iconStyle2={
      paddingLeft:"15px",
      paddingTop:"12px",
      paddingRight:"3px",

    }
    return(
<div className ="SideBarContainer">
<i className="far fa-chart-bar fa-lg"  style={iconStyle}></i>
<i className="far fa-money-bill-alt fa-lg" style={iconStyle}></i>
</div>
    );
  }
}
export default SideBar
