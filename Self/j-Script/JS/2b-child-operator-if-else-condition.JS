// if else condition

// let age = 14

// if(age>17){
//     console.log("user can play ddlc")
// }
  
// else if(age===17){
//     console.log("play GTA")
// }

// else{
//      console.log("user can play mario") 
// }

















// let num = 14     // apn ko check krna hai number odd hai ya even 
// if(num%2===0){   // reminder dekhne ke liye % ka sign lagate hai.
//     console.log("even")
// }
// else{
//     console.log("odd")
// }



















// // terniary operator

// let age1 = 4;
// let drink;

// if(age1>=5){
//     drink = "coffee"
// }
// else{
//     drink = "milk"
// }
// console.log(drink)
// // ab apn ko itna bda code likhne ki jrurat nhi hai apn terniary opeartor bhi lga skte ya coditional operator bhi bolte hai isi ko







// let age3 = 3
// let drink3 = age3>=5 ? "coffee" : "milk"
// console.log(drink3)
// // is line ka mtlv smjho - age3 agr 5 ke barabar hai ya 5 se bda hai to(iske liye ? lagaya) coofee piyo otherwise(:) milk piyo






// var rax = 9 

// var drink9 = rax>=9 ? "beer" : "water"

// console.log(drink9)















// // and(&&) operator  isme dono condition true hogi tbhi if wala box chlega vrna else wala box chl jayega ..
// let firstName = "Aman";
// let age4 = 21;

// //ab muje check krna kya user ka name A se start ho rha or user ki age above 18 hai ...
// // ab muje ye dono condition ek sath check krni hai to hum and gate/operator lagate hai..

// if(firstName[0] ==="A" && age4>18){
//     console.log("name starts with A and user is above 18")
// }
// else{
//     console.log('name does not start with A and user is below 18 ' )
// }

// // ye overall condition tbhi true hogi jab && ke dono side wali condition true hogi agr ek side wali condition true hui to else wala box chl jayega ..jese-

// let fullName = "Aman";
// let age5 = 16;  //18

// if(fullName[0] ==="A" && age5>18){
//     console.log("name starts with A and above 18")
// } 
// else(console.log("dono value barabar nhi hai"))  // to ab ye wala box chl rha hai
























// // or gate/operator    -      ye tb chlta hai jab dono me se koi ek value true ho ya dono bhi true to bhi chl jayega agr dono false hui to nhi chlega
// let full = "Aman";
// let age6 = 10;  //18

// if(full[0] ==="A" || age6>18){
//     console.log("name starts with A and above 18")   // tb bhi ye wala box chl rha hai kyoki ek condition true hai
// } 
// else(console.log("dono value barabar nhi hai"))
// //
// let fullna = "Singh";
// let age8 = 10;  //18

// if(fullna[0] ==="A" || age8>18){
//     console.log("name starts with A and above 18")   // tb bhi ye wala box chl rha hai kyoki ek condition true hai
// } 
// else(console.log("dono me se ek bhi condition true nhi hai to ya wala box chlega ab"))























// //nested ifelse
// // ye game bna kr smjh lenge 

// //hamara game hai ek  winning number rkhte hai man lo [19] agr user 19 guess krta hai to hum bolenge you win the game or agr 19 se kam guess krta hai to hum boloenge too low or agr 19 se jayda guess krta hai to hum bolenge too high ye hamare game ka logic hai ise se hum seekh lenege


// let winNum = 19
// let userGuess = +prompt("guess a number")    //user se guess lene ke liye lagaya hai ye function     or ek bat ye prompt hai na string me hi input leta hai , isliye + ka sign lagaya hai

// if(userGuess === winNum){
//     console.log("you win the game ..")
// }
// else{ // ab isme or if ek lagaynge taki hum user ko ye bta ske k usne kesa guess kiya hai
//     if(userGuess<winNum){
//         console.log("too low")
//     }
//     else{
//         console.log("too high")
//     }
// }























// if     else if      else       operator

// let tempInDegree = 26

// if(tempInDegree < 0){
//     console.log("extremly cold outside")
// }
// else if(tempInDegree < 16){
//     console.log("it is cold outside")
// }
// else if(tempInDegree < 25){
//     console.log("weather is okay")
// }
// else if(tempInDegree < 35){
//     console.log("lets go for swim")
// }
// else if(tempInDegree < 45){
//     console.log("turn on AC")
// }
// else{
//     console.log("too hot...")
// }