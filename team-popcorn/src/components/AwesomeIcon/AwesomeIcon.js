import React, {Component} from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class AwesomeIcon extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <FontAwesomeIcon 
                icon={this.props.iconObject} 
                onClick={this.props.callbackFromSidenav ? this.clickedIcon : null}
                style={this.props.active ? styles.isClicked : styles.isNotClicked}
            />
        )
    }

    clickedIcon = () => {
        this.props.callbackFromSidenav(this.props)
    }
}

const styles = {
    isClicked: {
        color: '#F8F8F8',
        backgroundColor: '#00CED1',
        padding: '.5em',
        width: '15px'
    },
    isNotClicked: {
        color: '#F8F8F8',
        padding: '.5em',
        width: '15px'
    }
}