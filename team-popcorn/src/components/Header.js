import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component{
    render(){

        let style ={
            backgroundColor: '#337782',
            width: '100%',
            height: '50px'
          }

        return(
            <div style={style}></div> 
        );
    }
}
export default Header
