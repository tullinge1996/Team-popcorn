import React, {Component} from 'react'

export default class ExpandingSidenav extends Component {
    componentDidMount() {
        console.log(this.props.openedBy)
    }
    render() {
        return (
            <div style={styles.wrapper}>
                <form>
                    <input placeholder="Search" style={styles.input}></input>
                </form>
                <h3>
                {this.props.openedBy}
                </h3>
            </div>
        )
    }
}

const styles = {
    wrapper: {
        backgroundColor: 'grey',
        fontFamily: 'Courier New'
    },
    input: {
        fontSize: '1.35em'
    }
}