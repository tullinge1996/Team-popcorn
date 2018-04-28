import React, {Component} from 'react'

export default class ExpandingSidenav extends Component {
    render() {
        return (
            <div style={styles.wrapper}>
                Expanding Side Nav
            </div>
        )
    }
}

const styles = {
    wrapper: {
        backgroundColor: 'grey'
    }
}