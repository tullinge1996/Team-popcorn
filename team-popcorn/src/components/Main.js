import React from 'react';
import ReactDOM from 'react-dom';
import Shortcut from './Shortcut.js';

class Main extends React.Component{
    render(){
        let style = {
            flex: 1,
            backgroundColor: '#F8F8F8',
            display: 'flex',
            flexWrap: 'wrap',
            height: '100%'
        }

        return(
            <main style={style}>
                <Shortcut h2='Financial Analytics' h1='Sales Overview' />
                <Shortcut h2='Product Analytics' h1='Sales Funnel' />
                <Shortcut h2='Product Analytics' h1='Product Inventory' />
                <Shortcut h2='Price Analytics' h1='Optimisation' />
                <Shortcut h2='Data Queries' h1='Create Data Queries' />
                <Shortcut h2='Data Segments' h1='Create Data Segment Groups' />
            </main>
        );
    }
}
export default Main
