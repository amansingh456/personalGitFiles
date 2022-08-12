import React from "react";
import ReactDOM from "react-dom";

const name = 'AMAN';
const D = new Date().toLocaleDateString();
const T = new Date().toLocaleTimeString();


ReactDOM.render(
    <>
        <h1>MY Name IS {`${name}`} </h1>
        <p>Current Date is : {`${D}`} </p>
        <p>Current Time is : {`${T}`} </p>
    </>,
    document.getElementById('root')
);