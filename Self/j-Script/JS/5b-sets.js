// set

// ye bhi kuch kuch array ki trh hai but inme or array me diff. hote hai

// to bat krege ise kese banate hai, ise kab use karna chhaiye , or array or isme kya diff, hai...

// or iska hum index bhi nhi pta kr skte 


const num = new Set() // ese set banta hai or it is iterable 

const rum = new Set([1,2,3]) // set ke ander duplicates allowed nhi hote jese me manlo 3 ko or ek bar likhna chhahta hu to vo nhi show krega do bar , to vo  use ignore karega
console.log(rum)











// set wha use karte jha unique value ho... mtlv jisme vlaue repeat na ho rhi ho

// example
const myArray = [1,2,4,6,2,4] // ye array hai
console.log(myArray)
const uniqueElements = new Set(myArray)
console.log(uniqueElements)
// to ab keval ek ek elemnt bcha
