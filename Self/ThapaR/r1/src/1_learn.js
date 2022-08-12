// var React = require('react') // pehle ese likhte the par ab modern javascript ke aane se browser ki understanding ke liye Babel hai isliye direct import, export kar ke kam karte hai
import React from 'react'

// var ReactDOM = require('react-dom')
import ReactDOM from 'react-dom'

// ReactDOM.render('kya dikahana hai', 'kha dikhana hai', 'callback func') // ye render function ese hi kam krta 3 parameters ko lekar

ReactDOM.render(
   <>
      <h1> Hello World !</h1>
      <p>plz like and share</p>
   </>, //ab apn isme kitne bhi jsx element dal sakte hai vese render method keval ek hi print karata hai to uske liye vo sirf div ko hi ek man rha hai uske ander kuch bhi ho us se render method ko koi mtlv nhi(ab agr apn ko div nhi chhaiye to apn simple tag lga do bas ya fir array me dal do means <></>, [,], <React.Fragment></React.Fragment> in dono me kisi me bhi dal do chalega)
   document.getElementById('//html page pr div ki jo id hai uska nam'))


//  render method ke ander jo bhi apn html type element hote haio wahi JSX hote hai