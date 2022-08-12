// map (key value pair contain karta hai...)
// ye iterable hote hai

const person = new Map()
console.log(person)
// ye khali map ban gya hai ab isme key value pair add karte hai..

const personx = new Map()
personx.set('firstName','Aman')
personx.set('Age','32')
personx.set(1,'one')
personx.set([1,2,3],'onetwothree')
console.log(personx)
console.log(personx.get('firstName'))
console.log(personx.get('Age'))
console.log(personx.get(1))

console.log(personx.keys()) // sari key print karna ho to
// loop bhi chla sakte hai isme
for(let key of personx.keys()){
    console.log(key, typeof key)
} 


// sabse bda diff. obeject or map me ye hai , map me key kisi bhi type ki rakh sakte hai or object me key string hogi ya symbol hoga...





 