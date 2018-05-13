import React, {Component} from 'react'

export default class ExpandingSidenav extends Component {
    render() {
        return (
            <div style={styles.wrapper}>
                <form>
                    <input placeholder="Search" style={styles.input}></input>
                </form>
                <h3 style={styles.content}>
                This sidebar was opened by: 
                <p>{this.props.openedBy}</p>
                </h3>
            </div>
        )
    }
}

const styles = {
    wrapper: {
        backgroundColor: 'grey',
        fontFamily: 'Courier New',
        width: '200px'
    },
    input: {
        fontSize: '1.35em'
    },
    content: {
        padding: '1em',
        textAlign: 'center'
    }
}