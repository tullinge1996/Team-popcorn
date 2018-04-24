import React,{Component} from "react";
import SideBar from "./Components/SideBar";
import Header from "./Components/Header";
import Content from "./Components/Content";




class App extends Component {
  render(){
    return(
      <div>
        <Header/>
        <SideBar/>
        <Content/>
      </div>
    );
  }
}
export default App
