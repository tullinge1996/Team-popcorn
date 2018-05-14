import React, {Component} from 'react'
import faBell from '@fortawesome/fontawesome-free-solid/faBell'
import faInfoCircle from '@fortawesome/fontawesome-free-solid/faInfoCircle'
import granditudeLogo from '../img/granditude-logo-white-responsive.svg'
import AwesomeIcon from './AwesomeIcon'


export default class Header extends Component {
    render() {
        return(
            <div style={styles.wrapper}>
                <div style={styles.leftIcons}>
                    <img src={granditudeLogo} style={styles.granditudeLogo} />
                    <AwesomeIcon iconObject={faBell} /> 
                    <AwesomeIcon iconObject={faInfoCircle} /> 
                </div>
                <div style={styles.routing}>
                {this.props.openedBy != null ? this.props.openedBy.name : ""}
                </div>
            </div>
        )
    }
}

const styles = {
    wrapper: {
        backgroundColor: 'teal',
        display: 'flex'
    },
    granditudeLogo: {
        height: '20px',
        padding: '.4em'
    },
    leftIcons: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '120px'
    },
    routing: {
        color: '#F8F8F8',
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '30px',
        marginLeft: '15px'
    }
}
