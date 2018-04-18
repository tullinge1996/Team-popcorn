import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar.js'
import Sidebar from './components/sidebar.js'
import Menuparent from './components/menuParent.js'
import Viewparent from './components/viewParent.js'

ReactDOM.render(
  <div className ="root">
    <Menuparent />

    </div>,
    document.getElementById('root'));
