import React from 'react';
import ReactDOM from 'react-dom';

class GlobeIcon extends React.Component{
    render(){
        var FontAwesome = require('react-fontawesome'); // funkar inte?
        let styleFontAwesome = {
            color: '#FFF',
            fontSize: '18px'
        }

        let linkStyle = {
            display: 'table',
            alignSelf: 'center'
        }

        return(
            <a href="#" style={linkStyle}><FontAwesome className='fas fa-globe' style={styleFontAwesome} /></a>
        );
    }
}
export default GlobeIcon
