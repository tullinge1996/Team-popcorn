import React, {Component} from 'react'
import faChartBar from '@fortawesome/fontawesome-free-solid/faChartBar'
import faDatabase from '@fortawesome/fontawesome-free-solid/faDatabase'
import faPowerOff from '@fortawesome/fontawesome-free-solid/faPowerOff'
import faBed from '@fortawesome/fontawesome-free-solid/faBed'
import AwesomeIcon from './AwesomeIcon'

export default class Sidenav extends Component {
    render() {
        return (
            <div style={styles.wrapper}>
                <div style={styles.topIcons}>
                    <AwesomeIcon iconObject={faChartBar} 
                        callbackFromApp={this.props.callbackFromApp} 
                    />
                    <AwesomeIcon iconObject={faDatabase} 
                        callbackFromApp={this.props.callbackFromApp} 
                    />
                </div>
                <div style={styles.bottomIcons}>
                    <AwesomeIcon iconObject={faPowerOff} /> 
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
        justifyContent: 'space-between',
        height: '50px'
    },
    bottomIcons: {
        marginBottom: '45px'
    }
}
