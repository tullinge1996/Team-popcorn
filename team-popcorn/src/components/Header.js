import React, {Component} from 'react'
import '../styles/header.css'
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
                    <AwesomeIcon iconObject={faBell} iconCssClass={"fa-icon-header"} />
                    <AwesomeIcon iconObject={faInfoCircle} iconCssClass={"fa-icon-header"} />
                </div>
            </div>
        )
    }
}
