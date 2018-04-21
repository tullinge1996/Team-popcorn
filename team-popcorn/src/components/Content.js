import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.js';

class Content extends React.Component{
    render(){

        let style = {
            backgroundColor: 'red',
            width: '100%',
            height: '95vh',
            display: 'flex'
          }

        return(
            <content style={style}>
                <Nav />
            </content> 
        );
    }
}
export default Content