import React, {Component} from 'react';
import MainChild from './MainChild'

export default class Main extends Component {
    render() {
        return (
            <div className="item3">
                <div>
                    <h2>Main</h2>
                </div>
                <div className="main-content">
                    <MainChild/>
                    <MainChild/>
                    <MainChild/>
                    <MainChild/>
                    <MainChild/>
                    <MainChild/>
                </div>
            </div>
        )
    }
}