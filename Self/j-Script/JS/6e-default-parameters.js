// default parameters




// pehle hum kuch ese handel karte the undifined ko..
function sumTwo(a,b){
    if(typeof b === 'undefined'){ // iska mtlv agr b ki value hum de hi na to yha undifined hoti hai value isliye uski basic value 1,0 jo man me aaye kar sakte hai...
        b=1
    }
    return a+b
}
console.log(sumTwo(23))  // agr b ki value nhi dete to or agr de rhe hai to fir vo  if walaa case nhi chlaega dircet sum kr dega kyoki use do value mil rhi hai...











//lekin ab humare pas default parametrs hai..
//(ab ye or aasan ho gya hai ab hume if condition likhne ki jrurat nhi hai... direct value asign kr sakte hai )


function sumThree(a,b=7){ // ab yha b ki value ka mtlv hai hai agr neche b ki value na de to 7 ye le le or agr de de hi ho neche to fir wahi lega jo di hogi 
    return a+b
}
console.log(sumThree(23,76))






