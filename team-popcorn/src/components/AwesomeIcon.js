import React, {Component} from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class AwesomeIcon extends Component {
    render () {
        return (
            <a href="#">
                <FontAwesomeIcon onClick={this.clickedIcon} className={this.props.iconCssClass} icon={this.props.iconObject} />  
            </a>
        )
    }

    clickedIcon = () => {
        alert(`You clicked the ${this.props.iconObject.iconName} icon`)
    }
}