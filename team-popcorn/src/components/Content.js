import React, {Component} from 'react'
import '../styles/content.css'
import ShortcutItem from './ShortcutItem'

export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <ShortcutItem />
                <ShortcutItem />
                <ShortcutItem />
                <ShortcutItem />
                <ShortcutItem />
                <ShortcutItem />
            </div>
        )
    }
}