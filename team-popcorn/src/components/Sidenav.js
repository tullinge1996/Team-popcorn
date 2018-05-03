import React, {Component} from 'react'
import faChartBar from '@fortawesome/fontawesome-free-solid/faChartBar'
import faDatabase from '@fortawesome/fontawesome-free-solid/faDatabase'
import faPowerOff from '@fortawesome/fontawesome-free-solid/faPowerOff'
import faBed from '@fortawesome/fontawesome-free-solid/faBed'
import AwesomeIcon from './AwesomeIcon'

export default class Sidenav extends Component {
    constructor(props) {
        super(props)

        this.state = {FAActive:[
            false,
            false,
            false
        ]}
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <div style={styles.topIcons}>
                    <AwesomeIcon isClicked={this.state.FAActive[1]} num={1} iconObject={faChartBar} 
                    callbackFromApp={this.toggleHidden} 
                    />
                    <AwesomeIcon isClicked={this.state.FAActive[2]} num={2} iconObject={faDatabase} 
                    callbackFromApp={this.toggleHidden}
                    />
                </div>
                <div style={styles.bottomIcons}>
                    <AwesomeIcon isClicked={this.state.FAActive[3]} num={3} iconObject={faPowerOff} /> 
                </div>
            </div>
        )
    }

    toggleHidden = (n) => {
        console.log(n)
        // this.setState({
        //     isHidden: !this.state.isHidden,
        //     dataFromChild: dataFromChild
        // })
        this.state.FAActive[n]=!this.state.FAActive[n]
 
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
