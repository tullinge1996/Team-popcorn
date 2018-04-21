import React from 'react';
import ReactDOM from 'react-dom';

class TabOne extends React.Component{
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

          let hover = {
              backgroundColor: 'white'
          }

        return(
            <div style={style} onMouseOver={this.hover}>
                <a href="#" style={link}><h2>Financial Analytics</h2></a>
                <a href="#" style={link}><h1>Sales overview</h1></a>
            </div>
        );
    }
}
export default TabOne