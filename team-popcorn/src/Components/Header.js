import React,{Component} from "react";



class Header extends Component {
  render(){
    return(
<div className ="HeaderContainer">
<div>
<i  id = "iconStyle" className="fab fa-google fa-lg"></i>
<i  id = "iconStyle2" className="fas fa-bell fa-lg"></i>
<i  id = "iconStyle2"className="fas fa-info-circle fa-lg"></i>
</div>
</div>
    );
  }
}
export default Header
