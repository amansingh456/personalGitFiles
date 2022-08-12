// parameter-destructuring  (React me jayda use hota hai ye)

// ek object bna lete hai

const person = {
    firstName: 'Aman',
    age:21,
    gender:'male'
}
// Ab ek function banao
function personDetails(obj){
    console.log(obj.firstName)
    console.log(obj.gender)
}
// ab is function ko call kra lo or usme person ka obj jo uper banaya vo pass kralo
personDetails(person)
