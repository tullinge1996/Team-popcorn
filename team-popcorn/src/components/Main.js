import React from 'react';
import ReactDOM from 'react-dom';
import TabOne from './TabOne.js';
import TabTwo from './TabTwo.js';

class Main extends React.Component{
    render(){
        let style = {
            flex: 1,
            backgroundColor: '#F8F8F8',
            display: 'flex'
        }

        return(
            <main style={style}>
                <TabOne />
                <TabTwo />
            </main>
        );
    }
}
export default Main
