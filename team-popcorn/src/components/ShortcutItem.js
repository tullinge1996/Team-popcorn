import React, {Component} from 'react'
import '../styles/shortcutitem.css'

export default class ShortcutItem extends Component {
    render() {
        return (
            <div onClick={this.clickedMe} className="short-cut-item">
                <h3>{this.props.h3}</h3>
                <h2>{this.props.h2}</h2>
            </div>
        )
    }

    clickedMe = () => {
        alert(`You clicked ${this.props.h2}`)
    }
}

