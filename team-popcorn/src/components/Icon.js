import React from 'react';
import ReactDOM from 'react-dom';


export default class Icon extends React.Component{
    render(){

        let styleIcon = {
            fontSize: '18px',
            color: '#FFF'
        }

        if(this.props.type == 'sidebar'){
            var linkStyle = {
                alignSelf: 'center',
                marginBottom: '11px'
            }
        }else if(this.props.type == 'granditudeLogo'){
            var linkStyle = {
                alignSelf: 'center',
                content: 'url(https://d3q7h5qypnmh3y.cloudfront.net/company_profiles/logos/2218/medium/customlogo-image_128.png?1508918482)',
                filter: 'brightness(0) invert(1)',
                height: '50%',
                width: '1.2%',
                marginLeft: '11px' 
            }
        }else{
            var linkStyle = {
                alignSelf: 'center',
                marginLeft: '11px'
            }
        }

        return(
            <a href="#" style={linkStyle}><i className={this.props.iconName} style={styleIcon}></i></a>
        );
    }
}
