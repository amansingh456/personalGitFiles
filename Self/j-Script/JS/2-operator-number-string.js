// kya kya pdna hai ...


// type of operator -   
// data types (primitive data types)
// String
// Number
// booleans
// undefined
// null
// BigInt
// Symbol

let age = 22;
let firstName = 'Aman'
console.log(typeof age);
console.log(typeof firstName);

// ye bta rha h k age is a type of number operator and firstName is a type of string




// convert number to string
// javascript me ek choti si trick hai kisi number ko string me add krne k liye number ke sath empty string add kr do ..

age = age+"";
// ese krna h yadi age Number hai to ese empty string add krna hai

console.log( typeof age)

// now this (age+"") whole expression is a string






// convert string into number
// stirng ko Numberm change krna hai to string ke aage ek + ka sign add kr do bas

let mystr = +"aman"
console.log(typeof mystr)





// or bhi ek treeka hai dono ek dusre se chamge krne ka..

let myage = 18
//change
myage = String(myage);
console.log(typeof myage)



let myagex = "aman"
 //change
myagex = Number(myagex)
console.log(typeof myagex);






// string concatenation

let string1 = "Aman";
let string2 = "Singh";
let string3 = "Rajawat";
let fullName = string1+" " + string2+" " +  string3  // "" -> inke ander space lagaya hai isliye khali choda hai.. , pehla + space add krene ke liya lagaya hai or dusra space string jodne ke liye lagaya hai..
console.log(fullName) 
// space bhi yha ek string ki trh kam krta hai... isliye 3 to string  hi h 2 space ki string ki hai to 5 string ho gyi 5 string ko jodne ke liye 4   +   lagane pde..  






let string4 = "12"
let string5 = "13";
let newstr = +string4 + +string5        //ab ye string li h humne pr hume iska addition karana hai to   number me chnage krne k liye trick + add krdo string ke aage 
console.log(newstr)







// template string
let age2 = 21
let Namex =  "MR.SINGH" 
let aboutme = "my name is " + Namex   +" and my age is "   + age2
console.log(aboutme)

// ye kam boht tridious lag rha hai ise hum aasan kr skte hai ...



let age3 = 21
let Namess =  "MR.SINGH" 
let aboutme2 = `my name is ${Namess} and my age is ${age3}`   // `` lga kr likhna aasan hai dollar and {}placeholder lga kr hum variable ki value set kr skte hai..
console.log(aboutme2)
