import React, { Component } from 'react';
import './App.css';

import styled from 'styled-components'


const Outer = styled.div`
position:absolute;
text-align: center;
height:100%;
width:100%;
background-color:;
overflow:hidden;
`
const Navbar = styled.div`
position:absolute;
background-color: #00858f;
height:100%;
width:45px;
color: white;


   > button {
    background:red;
   border:1px solid red;
     font-size: 1em;
     margin: .6em;
     padding: 0.25em 1em;
     border-radius: 3px;

   }
`

const TopNavbar = styled.div`
position:relative;
background-color:#00858f;
height:45px;
width:100%;


> p {
color:red;
float:left;

}

`
const Ikoner = styled.div`
position:relative;
text-align: center;
height:90%;
 content:url(https://d3q7h5qypnmh3y.cloudfront.net/company_profiles/logos/2218/medium/customlogo-image_128.png?1508918482);
 filter: brightness(0) invert(1);

`
const Test = styled.div`
position:relative;
left:5%;
top:5%;
height: 500px;
background-color: #fff;
display: grid;
grid-template-columns: 400px 400px;
grid-row: auto auto;
grid-column-gap: 20px;
grid-row-gap: 20px;


.box {

  color:#00858f;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-family: sans-serif;
}
.box:hover {
  border:1.5px solid black;
  color:#00858f;
  padding: 20px
  display: flex
  align-items: center
  justify-content: center
  font-size: 40px
  font-family: sans-serif
}

`



class App extends Component {




  render() {
    return (
      <Outer>
      <TopNavbar>
      <Ikoner />
       </TopNavbar>
       <Navbar>

      </Navbar>
     <Test>
       <div className="box" det><div>Product</div></div>
       <div className="box"><div>Product</div></div>
       <div className="box"><div>Product</div></div>
       <div className="box"><div>Product</div></div>
     </Test>

      </Outer>
    );
  }
}



export default App;
