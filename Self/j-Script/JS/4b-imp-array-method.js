//forEach method
// important array methods









// // sabse pehle ek array bna lete hai 
// const counting = [2,3,4,5]
// // ab hume ek function banana hai jo ye kam krega is araay ek pehle element ko lega or uska indeex print kareyega or usi numberko 2 se multiply kr ke print kra dega
// function mul(number, index){
//     console.log('index is ', index)
//     console.log(`${number}*2 = ${number*2}`)
// }
// // mul(counting[0],0)  // ab manlo sabka esa hi chlana hai to loop lga dege
// for(let i = 0; i<counting.length; i++){
//     mul(counting[i],i)    
// } 




















// // ek function bna kr pehle simple loop se dekhte hai fir forEach method se 

// const a = ['laxmi','chhaya','Aman']

// function namex(name, index){
//     console.log(`index is ${index}, name is ${name} `)
// }

// for(let i = 0; i<a.length; i++){
//     namex(a[i],i)
// }
// // ab is chij ko hum forEach method se karte hai...


// const b = ['laxo','chahat','ASR']

// function names(name, index){
//     console.log(`index is ${index}, name is ${name} `)
// }

// b.forEach(names)
// //  to is trh se hum forEach method lga sakte hai













// next example 


// // ek array ke uske ander boht sare objects hai.., or ab apn ko har obejct ka firstName print karna hai mtlv ki apne pas boht sare user hai ab sabka firstname print karna hai to forEach kaise lagayege...
// const users = [
//     {firstName:'harshit',age:23},
//     {firstName:'shivam',age:26},
//     {firstName:'ajay',age:22},
//     {firstName:'aman',age:21},
// ]

// users.forEach(function(name){ // ye annonmus function mtlv bina nam ka function
//     console.log(name.firstName)
// })
