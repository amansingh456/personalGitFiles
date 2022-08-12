let fruit = 'mango'// ye sirf ek hi fruit liya hai pr boht sare lene hai fruit to array me likhte hai...



// arrays are collection of element...
// ordered collection of items...

let fruits = ['mango','apple','pine','grapes']  // mango 0 index par hai... or ese hi chalta hai...
console.log(fruits)
// ab agr ek hi particular fruit chhaiye to 
console.log(fruits[2])














// ab isme value change krna ho to ....

let items =['salt','sugar','poha','tea']
console.log(items)
items[2]='rajma'
console.log(items)













// push array mtlv peeche se add krna array me kuch
let obj=['table','chair','ball','bat']
console.log(obj)
obj.push('utensils')
console.log(obj)






let objs=['aman','singh','rajawat']
// pop array mtlv peeche se htana
objs.pop()
console.log(objs)   // dekho utensils fir se hat gya hai...
// ye sirf remove ni karta baki return me bhi hume dega to use kahi rkh skta

// to hum ek variable bna le rhe hai..
let poppedItem = objs.pop()
console.log('popped item is ', poppedItem)






// ab ese hi starting se add akrna ya hatana ho starting se to shift or unshift

// par ye ulta kam karte shift --> htata hai or
// unshift -->add karta hai... 