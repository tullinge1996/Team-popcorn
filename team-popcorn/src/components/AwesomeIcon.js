import React, {Component} from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class AwesomeIcon extends Component {
    constructor(props){
        super(props)
        console.log(this.props.iconObject.iconName)
    }
    render () {
        return (
            <div>
                <FontAwesomeIcon icon={this.props.iconObject} />
            </div>
        )
    }
}