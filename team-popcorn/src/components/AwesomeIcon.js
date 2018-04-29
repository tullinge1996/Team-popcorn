import React, {Component} from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class AwesomeIcon extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isClicked: false
        }
    }
    render() {
        return (
            <FontAwesomeIcon 
                icon={this.props.iconObject} 
                onClick={this.props.callbackFromApp ? this.clickedIcon : null}
                style= {this.state.isClicked ? styles.isClicked : styles.isNotClicked}
            />
        )
    }

    clickedIcon = () => {
        this.props.callbackFromApp(`${this.props.iconObject.iconName}`)
        this.setState({
            isClicked: !this.state.isClicked
        })
    }
}

const styles = {
    isClicked: {
        color: '#F8F8F8',
        backgroundColor: '#00CED1',
        padding: '.5em'
    },
    isNotClicked: {
        color: '#F8F8F8',
        padding: '.5em'
    }
}