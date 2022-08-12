// filter method
// muje filter karne hai sare odd or sare even to kaise krege
const num = [1,2,3,4,5,6,7,8,9]
function isEven(number){
    return number%2===0
}
function isOdd(number){
    return number%2!==0
}
const evenNum = num.filter(isEven)
const oddNum = num.filter(isOdd)
console.log(evenNum)
console.log(oddNum)


