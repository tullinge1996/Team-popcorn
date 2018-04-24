import React,{Component} from "react";
import "../App.css";



class Header extends Component {
  render(){
    var iconStyle={
      paddingLeft:"10px",
      paddingTop:"12px",
      paddingRight:"3px",

    }
    var iconStyle2={
      paddingLeft:"15px",
      paddingTop:"12px",
      paddingRight:"3px",

    }
    return(
<div className ="HeaderContainer">
<div>
<i className="fab fa-google fa-lg"  style={iconStyle}></i>
<i className="fas fa-bell fa-lg" style={iconStyle2}></i>
<i className="fas fa-info-circle fa-lg"style={iconStyle2}></i>
</div>
</div>
    );
  }
}
export default Header
