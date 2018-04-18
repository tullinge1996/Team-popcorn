import React from 'react';
import ReactDOM from 'react-dom';
import master from '../styles/master.css'


class Viewparent extends React.Component{
render(){

  let viewStyles ={
    display: "flex",
    flexDirection: "column",
    justifyContent:"space-around",
    width:"98.5%",
    height:"97vh",
    backgroundColor: "#eee"
  }
   let sectionStyles = {
     display:"flex",
     flexDirection:"row",
     justifyContent:"space-around",
     alignItems: "center",
     width:"100",
     height:"40vh",
   }

   let contStyles={
     width: "400px",
     height: "300px",
     backgroundColor:"#fff",
     textAlign: "center"
   }
  return(
    <div style ={viewStyles}>
        <section style = {sectionStyles}>
            <div style = {contStyles}> Sales <br /> sales</div>
            <div style = {contStyles}> Sales <br /> sales</div>
            <div style = {contStyles}> Sales <br /> sales</div>
        </section>
        <section style = {sectionStyles}>
            <div style = {contStyles}> Sales <br /> sales</div>
            <div style = {contStyles}> Sales <br /> sales</div>
            <div style = {contStyles}> Sales <br /> sales</div>
      </section>
    </div>
  );

}
}
export default Viewparent
