import React, {Component} from 'react'
import faBell from '@fortawesome/fontawesome-free-solid/faBell'
import faInfoCircle from '@fortawesome/fontawesome-free-solid/faInfoCircle'
import granditudeLogo from '../img/granditude-logo-white-responsive.svg'
import AwesomeIcon from './AwesomeIcon'


export default class Header extends Component {
    render() {
        return(
            <div style={styles.wrapper}>
                <div>
                    <img src={granditudeLogo} style={styles.granditudeLogo} />
                    <AwesomeIcon iconObject={faBell} iconPlacement="header" />
                    <AwesomeIcon iconObject={faInfoCircle} iconPlacement="header" />
                </div>
            </div>
        )
    }
}

const styles = {
    wrapper: {
        backgroundColor: 'teal',
        padding: '5px'
    },
    granditudeLogo: {
        height: '20px'
    }
}
