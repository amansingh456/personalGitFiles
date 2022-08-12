import React from "react";
import ReactDOM from "react-dom";


const fname = 'AMAN SINGH'
const lname = 'RAJAWAT'



ReactDOM.render(
    <>
        <h1>my name is {`${fname} ${lname}`} </h1> {/* ab hum fname or lname ko alg lag curly braces me bhi de skate lekin hum inhe ek sath bhi likh sakte hai {fname +' '+ lname}   ese   ,  ek or tarika hai templete literals ka {`${fname} ${lname}`}*/}
        <p>my lucky number is {2+3} </p>
        {/* <p>my lucky number is {Math.random()} </p> */}
        
    </>,
    document.getElementById('root')
);