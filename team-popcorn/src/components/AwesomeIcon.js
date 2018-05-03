import React, {Component} from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class AwesomeIcon extends Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     isClicked: false
        // }
    }
    render() {
        return (
            <FontAwesomeIcon 
                icon={this.props.iconObject} 
                onClick={this.props.callbackFromApp ? this.clickedIcon(this.props.num) : null}
                style= {this.props.isClicked ? styles.isClicked : styles.isNotClicked}
            />
        )
    }

    clickedIcon = (n) => {
        console.log("clicked icon")
        console.dir(this.props.iconObject)
        //this.props.callbackFromApp(`${this.props.iconObject.iconName}`)
        this.props.callbackFromApp(n)
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