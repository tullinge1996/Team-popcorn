import React, {Component} from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class AwesomeIcon extends Component {
    render () {
        return (
            <div>
                <p>{this.props.iconName}</p>
            </div>
        )
    }
}