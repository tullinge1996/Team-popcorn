import React, {Component} from 'react'
import '../styles/header.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBell from '@fortawesome/fontawesome-free-solid/faBell'
import faInfoCircle from '@fortawesome/fontawesome-free-solid/faInfoCircle'
import granditudeLogo from '../img/granditude-logo-white-responsive.svg'
import AwesomeIcon from './AwesomeIcon'


export default class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="left-icons">
                    <img src={granditudeLogo} className="granditudeLogo" alt=""/>
                    <FontAwesomeIcon className="fa-icon-header" icon={faBell} />
                    <FontAwesomeIcon className="fa-icon-header" icon={faInfoCircle} />
                    <AwesomeIcon iconObject={faBell} />
                </div>
            </div>
        )
    }
}
