import React,{Component} from "react";



class SideBar extends Component {
  render(){
    return(
<div className ="SideBarContainer">
  <ul>
<li><a href="#"><i  id ="iconStyle3" className="far fa-chart-bar fa-lg"></i></a>
<ul className ="secondUl">
<li>Dashboard<button><i id="arrowColor" className="fas fa-arrow-down"></i></button></li>
<li>Marketing Analytics<button><i id="arrowColor" className="fas fa-arrow-down"></i></button></li>
<li>Financial Analytics<button><i id="arrowColor" className="fas fa-arrow-down"></i></button></li>
<li>Product Analytics<button><i id="arrowColor" className="fas fa-arrow-down"></i></button></li>
<li>Price Analytics<button><i id="arrowColor" className="fas fa-arrow-down"></i></button></li>
<li>Customer Analysis<button><i id="arrowColor" className="fas fa-arrow-down"></i></button></li>
<li>Demo<button><i id="arrowColor" className="fas fa-arrow-down"></i></button></li>
</ul>

</li>
</ul>
<i  id ="iconStyle3" className="far fa-money-bill-alt fa-lg"></i>

</div>
    );
  }
}
export default SideBar
