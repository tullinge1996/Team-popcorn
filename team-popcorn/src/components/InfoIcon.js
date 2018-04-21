import React from 'react';
import ReactDOM from 'react-dom';

class InfoIcon extends React.Component{
    render(){
        var FontAwesome = require('react-fontawesome'); // funkar inte?
        let styleFontAwesome = {
            color: '#FFF',
            fontSize: '18px'
        }

        let linkStyle = {
            alignSelf: 'center',
            marginLeft: '15px'
        }

        return(
            <a href="#" style={linkStyle}><FontAwesome className='fas fa-info-circle' style={styleFontAwesome} /></a>
        );
    }
}
export default InfoIcon
