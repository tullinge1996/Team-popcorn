import React,{Component} from "react";



class SideBar extends Component {
  render(){
    return(
<div className ="SideBarContainer">
  <ul>
<li><a href="#"><i  id ="iconStyle3" className="far fa-chart-bar fa-lg"></i></a>
<ul className ="secondUl">
<li>Text</li>
<li>Text</li>
<li>Text</li>
<li>Text</li>
<li>Text</li>
<li>Text</li>
<li>Text</li>
</ul>

</li>
</ul>
<i  id ="iconStyle3" className="far fa-money-bill-alt fa-lg"></i>

</div>
    );
  }
}
export default SideBar
