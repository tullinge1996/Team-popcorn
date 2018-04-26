import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.js';
import Main from './Main.js';
import styled from 'styled-components';

const Content = styled.div `
width: 100%;
height: 95vh;
display: flex;
`
class content extends React.Component{
    render(){

        return(
            <Content>
                <Nav />
                <Main />
            </Content>
        );
    }
}
export default content
