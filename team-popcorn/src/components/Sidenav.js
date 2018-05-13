import React, {Component} from 'react'
import faChartBar from '@fortawesome/fontawesome-free-solid/faChartBar'
import faDatabase from '@fortawesome/fontawesome-free-solid/faDatabase'
import faPowerOff from '@fortawesome/fontawesome-free-solid/faPowerOff'
import faBed from '@fortawesome/fontawesome-free-solid/faBed'
import AwesomeIcon from './AwesomeIcon'

export default class Sidenav extends Component {
    constructor(props){
        super(props)

        this.state = {
            icons: [
                {
                    id: 1,
                    icon: faChartBar,
                    active: false
                },
                {
                    id: 2,
                    icon: faDatabase,
                    active: false
                },
                {
                    id: 3,
                    icon: faBed,
                    active: false
                }
            ]
        }
    }

    render() {
        const iconsArray = []
        this.state.icons.map(icon => {
            iconsArray.push(
                <AwesomeIcon
                    id={icon.id}
                    key={icon.id} 
                    iconObject={icon.icon}
                    active={icon.active}
                    callbackFromSidenav={this.handleClickFromChild} 
                />
            )
        })
        return (
            <div style={styles.wrapper}>
                <div style={styles.topIcons}>
                    {iconsArray}
                </div>
                <div style={styles.bottomIcons}>
                    <AwesomeIcon iconObject={faPowerOff} /> 
                </div>
            </div>
        )
    }

    handleClickFromChild = (icon) => {
        const iconsArray = this.state.icons.slice()
        iconsArray.map(i => {
            if (i.id === icon.id){
                if(icon.active)
                    i.active = false
                else 
                    i.active = true
                this.props.callbackFromApp(i)
            }
            else
                i.active = false
        })
        this.setState({
            icons: iconsArray
        })
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
