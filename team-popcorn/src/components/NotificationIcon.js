import React from 'react';
import ReactDOM from 'react-dom';

class NotificationIcon extends React.Component{
    render(){
        var FontAwesome = require('react-fontawesome'); // funkar inte?
        let styleFontAwesome = {
            color: '#FFF',
            fontSize: '18px'
        }

        let linkStyle = {
            alignSelf: 'center',
            marginLeft: '5px'
        }

        return(
            <a href="#" style={linkStyle}><FontAwesome className='fa-bell' style={styleFontAwesome} /></a>
        );
    }
}
export default NotificationIcon
