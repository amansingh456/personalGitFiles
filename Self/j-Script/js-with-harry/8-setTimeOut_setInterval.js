// Arrow Functions ->


//jese normal function ko hum ese likhte the--
function sum(a,b){
    return a+b
}
console.log(sum(3,4))
// ab isi function ko fat arrow function me kese likhege---

sum = (a,b) => {
    return a+b
}
console.log(sum(4,5))
// ye esi jgh kam aate jese hum bech me coding kar rhe ho tab





// setTimeOut
//  setTimeOut ka pehla arrgument ek function ho sakta hai jese -- , or dusra arrgument hota hai kitne sec ke bad aap run karna chhate ho

logkaro = () =>{
    console.log('im your log')
}

setTimeout(logkaro, 2000) // to ab aap dekhna ye hamare page pr 2 sec ke bad dikhega



// ab yahi kam agr apko repeatdly karavna hoto setTimeout ki jgh  setInterval karlo

// setInterval(logkaro, 2000); // to ab aap dekhna ye repeat ho rha hai...

