import React, {Component} from 'react'
import '../styles/sidenav.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faChartBar from '@fortawesome/fontawesome-free-solid/faChartBar'

export default class Sidenav extends Component {
    render() {
        return (
            <div className="sidenav">
                <FontAwesomeIcon className="fa-icon-sidenav" icon={faChartBar} />
            </div>
        )
    }
}