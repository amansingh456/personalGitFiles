// ! First see some basic things --->

//* conversion of number to string
let x = 10
let y = x+''
console.log(typeof(y)) // ye ab string hai....

let z = String(x)
console.log(typeof(z)) // ye ab string hai....


// * conversion of string to number 
let a = "10"
let b = Number(a)
console.log(typeof(b)) // ye ab number hai..

let c = +a
console.log(typeof(c)) // ye ab number hai..











// * trim() function in JS
 let name = "      masai       "
 console.log(name.trim()) // it remove extra spaces from end & starting....











//  * split("seprator") function in js
let str = "the |quick, fox |is a, cute |animal"
console.log(str.split(" ")) // ab ye space se seprate kr rha hai...
console.log(str.split(",")) // ab ye , se seprate kr rha hai...
console.log(str.split("|")) // ab ye | se seprate kr rha hai...

let str2 = "MASAI"
console.log(str2.split(""))











// * conversion of string array in number array -->
let arr = ["1","23","45","5567","54"]
// let res = []
// for(i=0;i<arr.length;i++){
//     res.push(Number(arr[i]))
// }
// console.log(res) // this is little bit lenthy...
 let resu = arr.map(Number)
 console.log(resu)
