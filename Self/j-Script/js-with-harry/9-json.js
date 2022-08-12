// JSON--

// manlo mene  ek object banaya






obj = {name:'harry', age:34, a:{this:'that'}}
// console.log(obj)


let  huu = JSON.stringify(obj) // is se kya hoga jo object tha vo huu nam ke variabe me string ban gya hai..(ek or bat JSON hamesa double quotes me standard karta hai..)

// console.log(typeof huu, huu) // ab ye to string ban gya ab waps se JSON se string ko object me kese convert karte hai.. 






xx = JSON.parse(`{"name":"harry","age":34,"a":{"this":"that"}}`) // fir apn ko string ko bacticks ke ander likhna padega
console.log(typeof xx, xx)