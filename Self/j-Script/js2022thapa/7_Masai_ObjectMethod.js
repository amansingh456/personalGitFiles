// ! Objects Method ---->

let obj = {
    a:10,
    b:20,
    print: function(){
        console.log("Bruce Wayne")
    }
}

// console.log(obj)
obj.print() // agr object ke ander function hai to use hum object method kehte hai..or usko call akrne ka tareeka obj.function ka name()







let objx = {
    name:"Aman",
    age:23,
    print: function(){
        return 10+20
    }
}

console.log(objx.print());


















// ! create an object method to print your location, and you have to use return statement..
let details = {
    address: function(){
        return ("Gola ka Mandir ")
    }
}
console.log(details.address())







let ob1 = {
    print: function(name,age){
        console.log(`my name is ${name} & my age is ${age}`)
    }
}

ob1.print("chunnu",46)







let ob2 = {
    add: function(a,b){
        return a+b
    }
 }

 console.log(ob2.add(12,14))










//  ! create an object method to print the details present inside the object 

let ob3 = {
    name:"Aman",
    age:23,
    location:"Gwl",


    print: function(){
        console.log(`my name is ${this.name} & my age is ${this.age} & i live in ${this.location}`)
    }
}

ob3.print()




// ! calculate the area of the triangle
// * 0.5*base*height

let ob4 = {
    b:10,
    h:20,
    name:"Aman",
    age:23,
    area:function(){
        console.log(0.5*this.b*this.h)
    },
    detail: function(){
        console.log(`my name is ${this.name} and my age is ${this.age}`)
    }
}
ob4.area()
ob4.detail()

// ye update karne ke bad show kar rha hai..
ob4.name="ajay"
ob4.age=67

ob4.detail()








// ! create an object with this output -->
/*
hello ram
age is 23
hobbies are Coding, Singing
*/

let obj1 = {
    name:"Ram",
    age:23,
    hobbies:["Coding", "Running"],

    printx: function(){
        console.log(`hello ${this.name}`)
        console.log(`age is ${this.age}`)

        // let bag = ""
        // for(let i=0;i<this.hobbies.length;i++){
        //     if(i!=this.hobbies.length-1){
        //         bag+=this.hobbies[i]+", "
        //     }
        //     else{
        //         bag+=this.hobbies[i]
        //     }
            
        // }
        // console.log(`hobbies are - ${bag}`)

        // ? iski jgh pr join() function use karte hai...

        console.log(`Hobbies are - ${this.hobbies.join(", ")}`)
    }
   
}

obj1.printx()
obj1.hobbies[1]="Singing"
obj1.printx()










