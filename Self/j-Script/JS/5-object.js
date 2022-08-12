// arrays are good but not sufficient for real life data

//object (refrence data type hai)
// obejects me hoti hai key value pair
// key string hogi ya symbol hoga
// Object don't have index (mtlv isme i nhi hota)


const person = {
    name:'harshit',
     age:21,
     hobbies:['watching-movies','listening songs', 'sleeping']
    }
    
console.log(typeof person)
console.log(person)
// isme ek ek value leege to kese 
console.log(person.name)
console.log(person.age)// ye by default string me hi hota hai to chhaye sq bracket lagao ya ni
console.log(person.hobbies)
// mtlv object ke nam ke bad .key likh do to value print ho jayegi



//key value pair add krna ho to 
person.gender='male' // object ka nam.  fir jo add karna ho
console.log(person)