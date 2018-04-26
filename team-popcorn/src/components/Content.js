import React, {Component} from 'react'
import '../styles/content.css'
import ShortcutItem from './ShortcutItem'

export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <ShortcutItem h3="Finanial Analytics" h2="Sales Overview" />
                <ShortcutItem h3="Product Analytics" h2="Sales Funnel" />
                <ShortcutItem h3="Product Analytics" h2="Product Inventory" />
                <ShortcutItem h3="Price Analytics" h2="Optimisation" />
                <ShortcutItem h3="Data Queries" h2="Create Data Queries" />
                <ShortcutItem h3="Data Segments" h2="Create Data Segment Groups" />
            </div>
        )
    }
}