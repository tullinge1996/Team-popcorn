import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Header = styled.div `
background-color: #337782;
height:5vh;
display: flex;

`
const Ikon = styled.div`
  position:relative;
  display:inline-block;
  align-self: center
  margin: 0 .1em;
  background: transparent;
  color: red;

>i {
  margin-left:10px;
  color:white;
  font-size:18px;
}

  ${props => props.granditudeLogo && `
    content: url(https://d3q7h5qypnmh3y.cloudfront.net/company_profiles/logos/2218/medium/customlogo-image_128.png?1508918482);
    filter: brightness(0) invert(1);
    width:1.5%
    align-self: center
    margin-left:10px ;
  `}

`;

class header extends React.Component{
    render(){
        return(
        <Header>
          <Ikon granditudeLogo></Ikon>
          <Ikon ><i className="fa fa-bell"></i></Ikon>
          <Ikon><i className="fa fa-info-circle"></i></Ikon>
        </Header>
        );
    }
}
export default header
