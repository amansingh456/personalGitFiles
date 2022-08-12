// Variables - 3 types (var, const, let)

var myName = "Aman Singh"

var myAge = 26

var mySirname = " Rajawat"

console.log(myName)
console.log(myAge)
console.log(mySirname)


// var --> ye function scope hota hai
// Let & Const --> ye Block scope hota hai


// Const ki value ek bar assign karne ke bad chnage ni hoti jabki let and var ki ho jati hai const mtlv constant fix.

// Var keyword ko function ke ander bahr if condition ke ander kahi bhi likh sakte hai vo kam krega .

// let and const block ke ander hi chalte hai ..{} iske ander hi chlega. let agr parent le ander hai to child use use kar sakta hai lekin agr child ke ander let ko liya hai to usko parent use ni kar sakta















//  Data Types--
//  Main Way me -  Datatypes in Js - 7 Types (String, Number, Boolean, Null, Undifined, Object, Symbol)
//  At very high level there are two types of Datatypes..
//  1.-Primitive Data Type - (string, Number, Boolean, Symbol, Undifined, Null)
//  2.-Reference Data Type - (Array, Object) 
 
console.log(typeof(myName))
console.log(typeof(myAge))



// 🙌  Differnce Between Null & Definied -
// null menas humne koi valriable define kr diya jiski hume kabhi jrurat hi ni pdegi to usko null define karte hai 
var iAmUseLess = null
console.log(iAmUseLess);
console.log(typeof(iAmUseLess)); // ye second bug hai object show karta hai lekin null karna chhaiye kyoki vo useless hai ye object kese ho sakta hai.


// or undifined means abhi undifene hai lekin jab jrurt pdegi to uska use kr lege 
var standBy ; 
console.log(standBy);
console.log(typeof(standBy));


















// Number, String ke sath add ni hoga
console.log(4 + '3')

// lekin - ho jayega kyuki ye bug hai koi logic ni hai
console.log(9 - "5")
console.log("9" - 5)

// string jodna ho to + is se jud jayega 
console.log("aman" + "singh")

// lekin string - kro to ni hoga NaN dega (not a number)
console.log("aman" - "singh")

// In JS true represnts = 1 and false represents = 0
console.log(true + true)
console.log(true + false)
console.log(false + false)
console.log(false - true )
















// Expression and Operator
// 6 types Operators In JS 

// 1.- Assign Operator (=)
var x = 5
var y = 5
console.log(x=y);



// 2.- Arthimatic Operator (+,-,*,/),(Reminder lena Hai to %),(increment Operator x++,++x or x--, --x)



// 3.- Comaprison Operator
// (1).- DoubleEqual to(==)

var a = 10
var b = 20
console.log(a==b) 

// (2).- NotEqual to (!=)
console.log(a!=b)

// (3).- Greater than (>)
console.log(a>b)

// (4).- Greater than and equalto (>=)
console.log(a>=b)

// (5).- Less than (<)
console.log(a<b)

// (6).- Less than and eqaul to(<=)
console.log(a<=b)



// 4.- Logical Operators
// logical operator and comparison operator ki valur true and false mtlv ki boolean value me hi aayegi

// (1).- AND(&&) - dono condition true honi chhaiye
console.log(a<b && b>0)

// (2).- OR(||) - koi ek condition sahi ho to chlega
console.log(a>b || b>0)

// (3).- NOT(!) - sahi ko false batega or glt ko true
console.log(!a<b);


// 5.- String Operator (Conacatenatoin)
// do string ko jodne ke liye (+) concate karne ka kam aata hai result me single string deta hai.
console.log("hello"+"world")
console.log(myName+mySirname);



// 6.- Conditional (ternary) Operator - isme 3 operands hote hai  example-
// varibaleName = (condition) ? value1 : value2 (esa syntax hota hai terniary operator ka )
// ye if and else ka short version hai

var agex = 19;
if(agex >= 18){
    console.log("user can vote")
}
else{
    console.log("user is not eligible to vote")
}

// Ab isko terniary operator me likhte hai

agex >= 18 ? console.log("hurrah") : console.log("!!oopsps")