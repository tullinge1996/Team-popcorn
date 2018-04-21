import React from 'react';
import ReactDOM from 'react-dom';
import NotificationIcon from './NotificationIcon.js';
import InfoIcon from './InfoIcon.js';

class Header extends React.Component{
    render(){

        let style = {
            backgroundColor: '#337782',
            width: '100%',
            height: '5vh',
            display: 'flex'
          }

        return(
            <header style={style}>
                <NotificationIcon />
                <InfoIcon />
            </header> 
        );
    }
}
export default Header