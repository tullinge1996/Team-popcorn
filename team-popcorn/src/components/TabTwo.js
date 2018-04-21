import React from 'react';
import ReactDOM from 'react-dom';

class TabTwo extends React.Component{
    render(){

        let style = {
            width: '33.33%',
            height: '50%',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '4%'
          }

          let link = {
            textDecoration: 'none',
            alignSelf: 'center',
            color: '#337782',
            
          }

        return(
            <div style={style}>
                <a href="#" style={link}><h2>product Analytics</h2></a>
                <a href="#" style={link}><h1>Sales Funnel</h1></a>
            </div>
        );
    }
}
export default TabTwo