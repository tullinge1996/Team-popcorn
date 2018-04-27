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
            width: '30%',
            height: '40%',
            backgroundColor:'#F8F8F8',
            textAlign:"center"
        }

        let hoveredStyle = {
            width: '30',
            height: '40%',
            backgroundColor:'#FFF',
            textAlign:"center"
        }

        let link = {
            textDecoration: 'none',
            color: '#337782',
            fontSize: '1.4em',
        }

        return(
            <div style={this.state.hovered ? hoveredStyle : style}  onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={alert}>
                <a href="#" style={link}><h2>{this.props.label}</h2></a>
                <a href="#" style={link}><h1>{this.props.submenu}</h1></a>
            </div>
        );
    }
}
export default Shortcut
