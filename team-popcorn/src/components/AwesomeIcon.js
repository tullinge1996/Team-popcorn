import React, {Component} from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class AwesomeIcon extends Component {
    constructor(props){
        super(props)

        if(this.props.iconPlacement === "header"){
            styles.wrapper = {
                color: '#FFF',
                marginLeft: '15px',
                paddingBottom: '2px'
            }
        }
        else if (this.props.iconPlacement === "sideNav"){
            styles.wrapper = {
                color: '#FFF',
                marginLeft: '8px',
                marginTop: '15px'
            }
        }
    }
    render () {
        return (
            <a href="#">
                <FontAwesomeIcon onClick={this.clickedIcon} icon={this.props.iconObject} style={styles.wrapper} />
            </a>
        )
    }

    clickedIcon = () => {
        alert(`You clicked the ${this.props.iconObject.iconName} icon`)
    }
}

const styles = {}