// methods -- kya hote hai..(function inside obejcts )

// ek object bna leta hu--

const person = {
    firstName:'Aman' ,
    age:32,
    about:function(){
        console.log(`person name is ${this.firstName} and person age is ${this.age}`) // this.key isliye likh rahe hai kyoki object ke ander variable define hai to use btana pdega ke tumhre hi object me hai vo key
    }

}
person.about() // yha console.log me function nhi banana vrna vo pura function hi de dega sirf vo key leni hai jisme function bna hua hai..



//





const personx = {
    firstName:'Laxo' ,
    age:21,
    about:function(){
        console.log(this) // this ese kam karta hai..
    }
}
personx.about()