import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './Icon.js';

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
            <Icon iconName='fa fa-bar-chart' type='sidebar' />
            <Icon iconName='fa fa-database' type='sidebar' />
            </nav> 
        );
    }
}
export default Nav