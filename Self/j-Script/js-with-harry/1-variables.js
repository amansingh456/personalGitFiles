// what are variables?    -containers to store data values
//  3 trh se variable declare kar sakte hai....   1.var,   2.let,   3.const 







// DataTypes in JavaScript-

// 1. Number 
var num1 = 23;
var num2 = 59;
console.log(num1 + num2);





// 2. String
var str1 = 'This is a string';
var str2 = 'This is a another string';
var totalStr = str1 + " " + str2;
console.log(totalStr);






// 3. objects
// (jese ki man lo hume marks store karna hai logo ke)

var marks = {
    ravi: 45,
    harry: 25,
    raj: 35,
    avi: 46
}
console.log(marks)






// 4. booleans
var a = true;
var b = false;
console.log(a,b);

// or

var num1 = 5;
var num2 = 7;


var c = num1<num2;
console.log(c) // (to ye jo true bta rha mtlv num1 chota hai num2 se agr hum sign opposite kar de to false show krega_)





// 5. undifined

var und;  // (means variable bna kar khali chhod diya hai isme btaya hi nhi hai apn ne ke isme kya hai to vo use undifined show krega esa hum tab akrte hai jab hume koi value bad me assign karni ho to isi variable me kar sakte hai)
console.log(und) ;

und = 'Aman Singh Rajawat'; //(iska mtlv ab humne und me value assign kar di hai )
console.log(und);




// 6. Null

var n = null ;// (null ka mtlv undifined se alg hai..undifined ka mtlv khali chodna hota jo bad me kam me liya ja sake or null ka mtlv khali chodna nhi hota iska mtlv k isme kuch hai hi nhi ye null hai)
console.log(n);




// 7. Symbol 
// ise abhi ignore kr do ye advanced javascript hai...









/*
At a very high level, there are two types of data types of dataTpyes in JS
1. Primitive DataType: undifined, Null, Number, String, Booleans, Symbol
2. Refrence DataType: Aarays, Objects
*/





// AARAYS-

var arr = [1,2,3,'bablu',7,5,6]
console.log(arr)
console.log(arr[3]) // is se index pta chalta hai..kis index pr kya likha hai pta karna hai to uska number likh dos
