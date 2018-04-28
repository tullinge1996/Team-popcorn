import React, {Component} from 'react'
import faChartBar from '@fortawesome/fontawesome-free-solid/faChartBar'
import faDatabase from '@fortawesome/fontawesome-free-solid/faDatabase'
import faPowerOff from '@fortawesome/fontawesome-free-solid/faPowerOff'
import AwesomeIcon from './AwesomeIcon'

export default class Sidenav extends Component {
    render() {
        return (
            <div style={styles.wrapper}>
                <div style={styles.topIcons}>
                    <AwesomeIcon iconObject={faChartBar} iconPlacement="sideNav" />
                    <AwesomeIcon iconObject={faDatabase} iconPlacement="sideNav"/>
                </div>
                <div style={styles.bottomIcons}>
                    <AwesomeIcon iconObject={faPowerOff} iconPlacement="sideNav" />
                </div>
            </div>
        )
    }
}

const styles = {
    wrapper: {
        backgroundColor: 'teal',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    topIcons: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: '5px'
    },
    bottomIcons: {
        marginBottom: '45px'
    }
}