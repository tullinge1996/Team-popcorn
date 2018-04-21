import React from 'react';
import ReactDOM from 'react-dom';

class ChartIcon extends React.Component{
    render(){
        var FontAwesome = require('react-fontawesome'); // funkar inte?
        let styleFontAwesome = {
            color: '#FFF',
            fontSize: '18px'
        }

        let linkStyle = {
            display: 'table',
            alignSelf: 'center',
            marginBottom: '13px'
        }

        return(
            <a href="#" style={linkStyle}><FontAwesome className='far fa-chart-bar' style={styleFontAwesome} /></a>
        );
    }
}
export default ChartIcon
