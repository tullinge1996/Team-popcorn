import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './Icon.js';

class Header extends React.Component{
    render(){

        let style = {
            backgroundColor: '#337782',
            height: '5vh',
            display: 'flex'
        }

        return(
            <header style={style}>
                <Icon iconName='' type='granditudeLogo'/>
                <Icon iconName='fa fa-bell' type='headerIcon'/>
                <Icon iconName='fa fa-info-circle' type='headerIcon'/>
            </header> 
        );
    }
}
export default Header