import React from 'react';
import ReactDOM from 'react-dom';

class Shortcut extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            hovered: false
        }
    }

    mouseOver = () => {
        this.setState({
            hovered: true
        });
     }

    mouseOut = () => {
        this.setState({
            hovered: false
        });
    }


    render(){
        
        let style = {
            width: '33.33%',
            height: '40%',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '4%',
            backgroundColor:'#F8F8F8'
        }

        let hoveredStyle = {
            width: '33.33%',
            height: '40%',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '4%',
            backgroundColor:'#FFF'
        }
    
        let link = {
            textDecoration: 'none',
            alignSelf: 'center',
            color: '#337782'
        }

        return(
            <div style={this.state.hovered ? hoveredStyle : style}  onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} >
                <a href="#" style={link}><h3>{this.props.h2}</h3></a>
                <a href="#" style={link}><h2>{this.props.h1}</h2></a>
            </div>
        );
    }
}
export default Shortcut