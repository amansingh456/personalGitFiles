// Operators-


// 1. Arthematic Operator
var a = 100
var b = 10
console.log('the value of a - b is =', a-b)
console.log('the value of a * b is =', a*b)
console.log('the value of a + b is =', a+b)
console.log('the value of a / b is =', a/b)

  





//  2. Assignment Operators

var c = b
console.log(c) // jo humne pehle b ki value assign ki thi wahi c ki dikha rha mtlv humne b ki value assign kar di c ko 

c+=2  // is se c ki value me 2 add ho gya
c-=2  // is se c ki value me 2 add ho gya
c*=2  // is se c ki value me 2 add ho gya
c/=2  // is se c ki value me 2 add ho gya
// console.log(c)









// 3. Comparison Operator

// (a) Double Equals To (==)

x = 34
y = 56 // 34 
console.log(x==y) // to ye de rha hai false mtlv x, y ke barabar nhi hai..(lekin agr  y ki value 34   likha hota to ye true deta kyoki ye sirf value check karta hai barabr hai ya nhi fir chhae vo string me likhi ho ya number me ) 
console.log(x===y)// ye dono dekhta hai value bhi or data type bhi mtlv dono string hai ya dono number hai



// (b) Greterthen Equals to(>=)
console.log(x>=y) // mtlv na to x bda hai y se na barabar hai

// (c) Lessthen Equals to(<=)
console.log(x<=y) // to ye ab true de rha mtlv x chota hai

// (d) Simple lessthen (<)
// (e) Simple Greaterthen (>)








// 4. logical Operators..



// (a) '!='   iska nam notEqualtTo  -> ( ye wala btata hai agr koi value barabar hai to false batyega agr alga lag hai to true btyega )

let num7 = 4
let num8 = 4
console.log(num7!=num8)

let num7s = 4
let num8s = 5
console.log(num7s!=num8s)

//  agr hum ek value ko string me likh de to

let num7e = 4
let num8e = "4"
console.log(num7e!=num8e)  // ab ye bta rha hai ke dono value alg alg nhi hai ek hi hai..


// '!==' iska nam notDoubleEqualTo ->  ( ye value ke sath sath data type bhi check krega )

let num7f = 4
let num8f = "6"

console.log(num7f!==num8f)







// (b) '&&'  iska nam -> andGate 
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
// && gate tabhi true value dega jab dono trf se barabar hoga...Baki sab jagh false show krega 


// (c) '||' iska nam -> OrGate
console.log(true||true)
console.log(true||false)
console.log(false||true)
console.log(false||false)
// || orgate tabhi false  value dega jab done trf alg alg  value hai... 


