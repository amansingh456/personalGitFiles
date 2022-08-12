"use strict";

//undifined
//null

let age; // khali chodna bhi hai to sirf itne pr hi chodna declare ke bad semicolon bas , variable bna kr khali chhod diya hai to undifined type show krega 
console.log( typeof age)

//esa hum var ke sath bhi kr skte hai...
var age2;
console.log(typeof age2)



//lekin esa hum const ke sath nhi kr skte
//const num;     //const ki value assign krni hi pdti hai
// console.log(typeof num)


let fullName;
console.log(typeof fullName)
fullName = "Rajawat"
console.log(typeof fullName ,',', fullName)  // ek sath  or bhi print kra skte hai , lga kr




// booleans & comparison operator

//booleans ek trh se do value hoti hai... ya to true ya to false


let num1 = 5
let num2 = 7


let c = num1>num2
console.log(c)







// ==  vs ===

// == double equalto value check krta hai(barabar hai ya nhi) data type chceck ni krta agr koi value number me likhi ho or dusri value stringnumber me liki ho or value barabar ho to double eqalsto true dikhayega jese -

let num3 = 3  // agr yha 3 na hokr 4 hoti ya kuch or value hoti to == bas true ki jgh false show keta or kuch nhi...use us se ye mtlv nhi h ke nymber me likhi hai value ya fir string me
let num4 = "3"
console.log(num3==num4)

//  === triple eqalsto data type or value dono  check krta hai jese...

let num5 = 5  // isko value se to mtlv hai hi uske alva ye ye bhi dekhta hai ki dono string ya hai dono number ahr hum 5 ki jagh 5+'' likh denge to ye value true show krega ..
let num6 = "5"
console.log(num5===num6)










// != vs !==   ye not equalto hota hai... or dusra wala not double equalto
//!= ye wala btata agr koi value barabar hai to false batyega agr alga lag hai to true btyega  chhaye value number me ho ya stirng me isko koi frk nhi padta

let num7 = 4
let num8 = "4"  // 4 ( same output aayega)
console.log(num7!=num8)

let num7s = 4
let num8s = 5
console.log(num7s!=num8s)



//  agr hum ek value ko string me likh de to

let num7e = 4
let num8e = "4"
console.log(num7e!=num8e)  // ab ye bta rha hai ke dono value alg alg nhi hai ek hi hai..




//  !== ye value ke sath sath data type bhi check krega 
let num7f = 4
let num8f = "6"

console.log(num7f!==num8f)






