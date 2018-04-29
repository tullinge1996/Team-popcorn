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
                    <Sidenav callbackFromApp={this.toggleHidden}/> 
                    {!this.state.isHidden && <ExpandingSidenav openedBy={this.state.dataFromChild}/>}
                    <Content callbackFromApp={this.toggleHidden}/>
                </div>
            </div>
        )
    }

    toggleHidden = (dataFromChild) => {
        this.setState({
            isHidden: !this.state.isHidden,
            dataFromChild: dataFromChild
        })
    }
}
 
const styles = {
    container: {
        display: 'flex'
    }
}
