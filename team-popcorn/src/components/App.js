import React, {Component} from 'react'
import Header from './/Header'
import Sidenav from './Sidenav'
import Content from './Content'
import ExpandingSidenav from './ExpandingSidenav'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isHidden: true,
            dataFromChild: ''
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <div style={styles.container}>
                    <Sidenav callbackFromApp={this.dataFromChild}/> 
                    {!this.state.isHidden && <ExpandingSidenav openedBy={this.state.dataFromChild}/>}
                    <Content />
                </div>
            </div>
        )
    }

    dataFromChild = (data) => {
        if(data.active){
            this.setState({
                isHidden: false,
                dataFromChild: data.icon.iconName
            })
        }
        else {
            this.setState({
                isHidden: true
            })
        }
    }
}
 
const styles = {
    container: {
        display: 'flex'
    }
}
