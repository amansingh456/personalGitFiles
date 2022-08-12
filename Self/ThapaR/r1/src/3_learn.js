import React from "react";
import ReactDOM from "react-dom";
// import "./index.css"





const name = "AMAN SINGH RAJAWAT"
const img1 = "https://picsum.photos/200/300" 
const img2 = "https://picsum.photos/250/300" 
const img3 = "https://picsum.photos/300/300"
const links = "https://www.thapatechnical.com" 


// inline css = style={ {color:'green', textTransform:'uppercase', textAlign:'center' } } 
// or 
// Object bna kr bhi kar skate hai kyoki boht sari css hui to line me kha likhte rahege is se acha uska object bna lo or us object ko style me pass kar do

const heading = {
    color: 'red',
    textAlign: 'center',
    fontWeight: 600,
    textTransform: 'capitalize',
    textShadow: '0px 2px 4px #ffe9c5',
    margin: '70px 0',
    fontFamily: "'Syne Tactile', 'cursive'"
}


 const img_div = {
    display: 'flex',
    justifyContent: 'center'
}




ReactDOM.render(
    <>

    <h1 contentEditable='true' className="heading"  style={heading}> {`my name is ${name}`} </h1>  {/* isme inline css ke liye object ki trh value dete hai pehla curli braces{} stlying ke liye or dusre me object ki trh value print karna */}
    
    <div className="img_div" style={img_div}>
        <img src={img1} alt="random images" />
        
        <img src={img2} alt="random images" />

        <a href={links} target='blank'>
        <img src={img3} alt="random images" />  
        </a>
    </div>

    </>,

 document.getElementById('root')   
);