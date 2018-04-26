import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import Header from './components/Header'
import Sidenav from './components/Sidenav'
import Content from './components/Content'

ReactDOM.render(
    <div className="mainContainer">
        <Header />
        <div className="container">
            <Sidenav />
            <Content />
        </div>
    </div>, 
    document.getElementById('root')
)

