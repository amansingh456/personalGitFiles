// Rest parameters


// manlo ek function banaya

function myFunc(a,b,c){
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)
}
myFunc(2,3,4)














// ab hum chahte hai k a ki value 2 ho , b ki value 3 ho , lekin c ki value ek array me boht sare number ho... vo kaise krege
function myHub(p,q,...r){// to yha hum rest parameters lga dege (...), ye hmesa last wale pr hi kam krega 
    console.log(`p is ${p}`)
    console.log(`q is ${q}`)
    console.log(`r is`,r ) // ab isme ek array print hoga
}
myHub(6,7,8,9,4,3,2,1)// hum r ke ander 7 ke bad wale sare number chhate hai (8,9,4,3,2,1)





















// Practice of rest parameters

// addAll nam ka function banao jisme 5,6 parameters dalo or sabka sum karao


function addAll(...numbers){
    // console.log(numbers) // to is se pta chla ke ye array hai
    // console.log( typeof numbers) // kis type ka array hai to object type ka
    
    // ese sum ke liye hume loop chlani pdegi
    let total = 0
    for(let number of numbers){
        total = total +number
    }

    return total
}
const ans = addAll(1,2,3,4,5,6,7,8,9)
console.log(ans)
