// Function ---> A JS function is a block of code designed to perform a particular task.

function sum(){
    console.log("hello world")
}
sum()


function sumx(){
    var a = 10, b = 20;
    var total = a+b
    console.log(total)
}
sumx() // jese isme koi arguments ni hai.







// Diff. btw function parameters and arguments .


// function parameters are the names listed in the function's definition.
// function arrguments are th ereal values passed in the function.

function add(a,b,c){ // ()- iske ander jo value hoti hai jese abhi hai a,b ye hoti parameters 
    var tot = a+b+c
    console.log(tot)
}
add(20,40,0) //fir function call karte time  ander jo value hoti hai jese abhi hai 20,40 ye hota hai arguments.






// Function Expression - (return wala method)

function nea(a,b){
    return a+b
}
var ex = nea(23,34)
console.log(ex)






// Anonymus function

var anoyFunc = function(a,b){
    return a+b
}
console.log(anoyFunc(23,43))





// Arrow Function.-->

// normal function 
function gug(a,v){
    return a*v
}
console.log(gug(3,4))

// Fat Arrow Function.->
const funcName = (k,j) => {
    return k*j
}
console.log(funcName(3,14))

