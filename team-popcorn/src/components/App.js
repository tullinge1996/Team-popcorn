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
            dataFromChild: null
        }
    }
    render() {
        return (
            <div>
                <Header openedBy={this.state.dataFromChild}/>
                <div style={styles.container}>
                    <Sidenav callbackFromApp={this.dataFromChild}/> 
                    {!this.state.isHidden && <ExpandingSidenav openedBy={this.state.dataFromChild}/>}
                    <Content />
                </div>
            </div>
        )
    }

    dataFromChild = (data) => {
        console.log(data)
        if(data.active){
            this.setState({
                isHidden: false,
                dataFromChild: data
            })
        }
        else {
            this.setState({
                isHidden: true,
                dataFromChild: null
            })
        }
    }
}
 
const styles = {
    container: {
        display: 'flex'
    }
}
