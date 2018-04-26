import React, {Component} from 'react'
import '../styles/sidenav.css'
import faChartBar from '@fortawesome/fontawesome-free-solid/faChartBar'
import faDatabase from '@fortawesome/fontawesome-free-solid/faDatabase'
import faPowerOff from '@fortawesome/fontawesome-free-solid/faPowerOff'
import AwesomeIcon from './AwesomeIcon'

export default class Sidenav extends Component {
    render() {
        return (
            <div className="sidenav">
                <div className="top-icons">
                    <AwesomeIcon className="fa-icon-sidenav" iconCssClass={"fa-icon-sidenav"} iconObject={faChartBar} />
                    <AwesomeIcon className="fa-icon-sidenav" iconCssClass={"fa-icon-sidenav"} iconObject={faDatabase} />
                </div>
                <div className="bottom-icons">
                    <AwesomeIcon className="fa-icon-sidenav" iconCssClass={"fa-icon-sidenav"} iconObject={faPowerOff} />
                </div>
            </div>
        )
    }
}