import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

 const Nav = styled.div `
 background-Color: #337782
 width: 5vh
 height: 100%
 display: flex
 flex-direction: column
 `
 const Meny = styled.div `
 display:inline-block
 align-self:center
 color:white
 display:flex
 flex-direction:column

  >i {
  margin-top:10px
  font-size:18px
  }
`
class nav extends React.Component{
    render(){
        return(
        <Nav>
          <Meny>
           <i className="fa fa-bar-chart"></i>
           <i className="fa fa-database"></i>
          </Meny>
       </Nav>

        );
    }
}
export default nav
