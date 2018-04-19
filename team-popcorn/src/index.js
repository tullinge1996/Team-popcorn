import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Menu from './Menu'
import Main from './Main'
import './index.css'

ReactDOM.render(
    <div className="grid-container">
        <Header />
        <Menu />
        <Main />
    </div>, 
    document.getElementById('root')
)
