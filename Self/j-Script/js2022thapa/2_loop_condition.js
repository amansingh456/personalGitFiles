// if and else condition.....
var tomr = "rain"

if(tomr == "rain"){
    console.log("need a raincoat")
}
else{
    console.log("No need to take a raincoat")
}





// nested if and else condition
var year = 1900;

if(year % 4 === 0){

    if(year % 100 === 0){

        if(year % 400 === 0){
            console.log("The year " + year + " is a leap year")
        }
        else{
            console.log("The year " + year + " is not a leap year")
        }
    }
    else{
        console.log("The year " + year + " is a leap year")
    }
}
else{
    console.log("The year " + year + " is not a leap year")
}


// Falsy Vlaue in JS (5 values - 0, "", null, undifined, Nan)
// ab inme se koi value if ke condition me aagyi to if wala box chalta hi nhi fir vo hamesha else wala box hi chlega

if(score = 0){ //score = 0 ki jgh keval 0 ya null likh do ya undifined likh do ya empty string to vo else wala box hi chlega
    console.log("won the game")
}
else{
    console.log("!oops")
}






// Switch Statement
// if , else if , else if , else  inko short karne ke liye switch statement hota hai..

var area = "rectangle" // yha ab chhaye circle likho ya square ya trianlge wahi dega ye kuch ulta pulta likhoge to enter valid data bolega
var PI = 3.142, a=2, b=4, r=3

switch(area){
    case "circle" : console.log(PI*r**2)
    break

    case "rectangle" : console.log(a*b)
    break

    case "triangle" : console.log((a*b)/2)
    break

    default : console.log("enter valid data")
}

// ye if else jesa kam kar rha hai bas ye jitne case hai sabki vale de rha hai isko rokne ke liye break point hai.




















// LOOPS --

// 1.- While Loop
// man lo ek se lekr 10 tak nunmber likhne hai to- 

var num = 0;
while(num <= 10){
    console.log(num)
    num++
   
} // while loop kya karta hai jab tak condition check na kar le tab tak result ni dikahata

// 2.- Do While Loop
var num = 0;
do{
    console.log(num)
    num++

}
while(num <= 10) // or ye do while pehle chl jayega fir dekhega kha tak jana hai fir condition check karta hai


// 3.- For Loop (syntax)
// for(initializer; condition; iteration)
// {
//     code to be executed
// }


for(i=0; i<=10; i++){
    console.log(i)    
}

// table likhna ho to ese likhege-

for(num=1;num<=10;num++){
    var tableOf = 9
    console.log(tableOf + " * " + num + " = " + tableOf * num)
}