import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Content from './components/Content.js';

let rootDiv = document.getElementById('root');
ReactDOM.render(
    <container>
        <Header />
        <Content />
    </container>,
    rootDiv
);

