import React, {Component} from 'react'

export default class ExpandingSidenav extends Component {
    render() {
        const content = this.props.openedBy.content
        const contentHeadings = []
        content.map((heading) => {
            contentHeadings.push(
                <div key={heading} style={styles.li}>{heading}</div>
            )
        })
        console.log(contentHeadings)
        return (
            <div style={styles.wrapper}>
                <form>
                    <input placeholder="Search" style={styles.input}></input>
                </form>
                <div style={styles.content}>
                    {contentHeadings}
                </div>
            </div>
        )
    }
}

const styles = {
    wrapper: {
        backgroundColor: '#404040',
    },
    input: {
        fontSize: '1.35em'
    },
    content: {
        color: '#F8F8F8',
        listStyleType: 'none'
    },
    li: {
        fontSize: '.9em',
        margin: '1em'
    }
}