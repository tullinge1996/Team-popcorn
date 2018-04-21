import React from 'react';
import ReactDOM from 'react-dom';
import ChartIcon from './ChartIcon.js';
import GlobeIcon from './GlobeIcon.js';

class Nav extends React.Component{
    render(){

        let style = {
            backgroundColor: '#337782',
            width: '5vh',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }

        return(
            <nav style={style}>
            <ChartIcon />
            <GlobeIcon />
            </nav> 
        );
    }
}
export default Nav