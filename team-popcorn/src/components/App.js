import React, {Component} from 'react'
import Header from './/Header'
import Sidenav from './Sidenav'
import Content from './Content'
import ExpandingSidenav from './ExpandingSidenav'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div style={styles.container}>
                    <Sidenav />
                    <ExpandingSidenav />
                    <Content />
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex'
    }
}
