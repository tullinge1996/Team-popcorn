import React, {Component} from 'react'

export default class ShortcutItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hovered: false
        }
    }
    render() {
        return (
            <div onClick={this.props.callbackFromApp ? this.clickedIcon : null} style={this.state.hovered ? styles.hoveredStyle : styles.notHoveredStyle} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                <h3>{this.props.h3}</h3>
                <h2>{this.props.h2}</h2>
            </div>
        )
    }

    clickedIcon = () => {
        this.props.callbackFromApp()
    }

    mouseOver = () => {
        this.setState({
            hovered: true
        })
    }

    mouseOut = () => {
        this.setState({
            hovered: false
        })
    }
}

const styles = {
    hoveredStyle: {
        width: '33.333333%',
        color: 'teal',
        fontFamily: 'Helvetica Neue',
        textAlign: 'center',
        paddingTop: '6em',
        backgroundColor: '#FFF'
    },
    notHoveredStyle: {
        width: '33.333333%',
        color: 'teal',
        fontFamily: 'Helvetica Neue',
        textAlign: 'center',
        paddingTop: '6em',
        backgroundColor: '#F8F8F8'
    }
}

