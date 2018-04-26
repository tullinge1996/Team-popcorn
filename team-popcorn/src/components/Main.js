import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const Main = styled.div `
 flex: 1;
 background-color:;
 display: flex
 flexWrap:wrap
 height: 100%
`

const Shortcut = styled.div `
 height: 100%;
 width:100%;
 padding: 10;
 margin:0;
 display: flex;
 flex-wrap: wrap-reverse;

.shortcuts {
  margin:0 auto;
  background-color:#eee;
  width: 33.333%;
  color:#137782;
  font-family:arial;

  >h1{
    margin-top:10px;
    text-align:center;
    }

   >h2{
    margin-top:150px;
    text-align:center;
   }

  :hover {
    background-color:#fff;
  }
}

`

class main extends React.Component{
    render(){
      
        return(
  <Main>
   <Shortcut>
   <a href className="shortcuts"><h2>Price Analytics</h2> <h1>Optimisation</h1> </a>
   <a href className="shortcuts"><h2>Data Queries</h2> <h1>Create Data Queries</h1> </a>
   <a href className="shortcuts"><h2>Data Segments</h2> <h1>Create Data Segment Groups</h1> </a>
   <a href className="shortcuts"><h2>Financial Analytics</h2> <h1>Sales Overview</h1> </a>
   <a href className="shortcuts"><h2>Product Analytics</h2> <h1>Sales Funnel</h1> </a>
   <a href className="shortcuts"><h2>Product Analytics</h2> <h1>Product Inventory</h1> </a>
  </Shortcut>
 </Main>
        );
    }
}
export default main
