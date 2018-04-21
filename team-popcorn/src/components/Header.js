import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="left-icons">
                    <i className="fa fa-globe"></i>
                    <i className="fa fa-bell"></i>
                    <i className="fa fa-info-circle"></i>
                </div>
            </div>
        )
    }
}