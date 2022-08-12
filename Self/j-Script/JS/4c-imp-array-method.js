// Map method , very imp for react



const counts = [1,3,5,2,4,7,6]
function square(number,index){
    return `index:${index}, ${number*number}`

}
// counts.map(square) // map function hamesa naya array banayega


const squareNumber = counts.map(square) // jo nya array banega vo is const me store hota jayega
console.log(squareNumber)












// realstic example
// ek array me users ke firstname store karne hai
const users = [
    {firstName:'harshit',age:23},
    {firstName:'shivam',age:26},
    {firstName:'ajay',age:22},
    {firstName:'aman',age:21},
]


 const userNames = users.map(function(name){
    return name.firstName
 })
console.log(userNames)