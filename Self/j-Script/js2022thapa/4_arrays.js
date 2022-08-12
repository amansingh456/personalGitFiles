// in an array we can store multiple value in a single variable.

let frineds = ["aman","amit","kd","aditya"]

// in JS we have an Array Class, and arrays are the prototype of this class

// 1st index jo hota hai vo kehlata lower index / lower boundary(0th position) or last index jo hota hai usko bolte hai upper index / upper boundary(array.length-1)









// Traversal in an Array

let myFriends = ["aman","laxo","kd","amit"]
console.log(myFriends[2]);
console.log(myFriends[0])
console.log(myFriends);

// length check karna ho to.
console.log(myFriends.length);
console.log(myFriends[myFriends.length-1]);















// for loop to navigate (is loop ko wha isliye ni dekha pehle kyoki ye array me hi use hota hai)

for(i=0; i<myFriends.length; i++){
    console.log(myFriends[i])
} //simple for loop





// ! After ES6  that becomes most simple... 
// for in loop
for(elements in myFriends){
    console.log(elements);
} // ye array ka index number provide karta hai

// * OR

let bag=""
for(elem in myFriends){
    bag=bag+elem+" "
}
console.log(bag)




// for of loop
for(elements of myFriends){
    console.log(elements)
} // is jo array me jo elememt  hota hai vo pta chalta hai






//! for each loop (ye map() method ki trh same kam karta hai lekin bas ye retun undefined  karta hai or map() method new Array return karta hai.. )
myFriends.forEach(function(elememt, index, array){
    console.log(elememt + " index : " + index)
}) // is se hum jo chhaye vo mil sakta hai elemnt ya index ya array sab mil jata hai.
// ab yhi kam fat arrow function se -

myFriends.forEach((elememt,index) => {
    console.log(index)
}); // ye simple hai fat arrow function






// !how search query works --->

var itemxxx = ["iphone","mackbook","speakers","earphone"]
var search = "iphone"
var isPresent;


for(let i=0;i<=itemxxx.length-1;i++){

    // console.log(itemxxx[i])
    
    if(search==itemxxx[i]){
        isPresent=itemxxx[i]
        break;
    }
    else{
        isPresent=null
    }
}
console.log(isPresent)

if(isPresent!=null){
    console.log(search,"is present")
}
else{
    console.log(search,"is not present")
}

















//! Searching & Filter of an array  ===>

// indexOf() ✌️
let fruit = ["mango", "orange", "apple", "guava", "grapes"]
console.log(fruit.indexOf("mango"))  // indedx no return karta ka jo bhi pehle milega uska agr dusra index number search karvana ho to (fruit.indexOf("mango", 1)) yha es ka mtlv ke index 1 ke bad mango dhudo to vo ab -1 return kar deta
// agar hai to present print karo ni h to not present print karo....


let ind = fruit.indexOf("orange")
if(ind>0){
    console.log("Present")
}
else{
    console.log("Not Present")
}



// lastIndexOf() ✌️ // last se index btata hai...    <--- is direction me search karta hai.











 
// 1.- includes() ✌️
let fruits = ["mango", "orange", "apple", "guava", "grapes"]
console.log(fruits.includes("orange"))

// ye btata hai array ye value hai ya ni boolean value deta hai true / false

// hai to print yes or no
let isThere = fruits.includes("apple")
if(isThere==true){
    console.log("Yes")
}
else{
    console.log("No")
}





// 2.- find() ✌️
// isme humko dekhna ke 400 se kam kitni value hai.
const prices = [100, 400, 300, 200, 250, 130 ,600]

const findElms = prices.find((elememt, index, array) => {
    return elememt < 400
})
console.log(findElms) // yha isme yhi prbl hai usko ek value satisfy karegi to bas find() ek hi value print karayega jabki ans me to 4,5 value hai
// or agr ek bhi condition agr satisfy ni karega to ye return karega undifined.






// 3.- findIndex() ✌️
const pricex = [100, 400, 300, 200, 250, 130 ,600]

const findElm = pricex.findIndex((elememt, index, array) => {
    return elememt < 400
})
console.log(findElm) // ye index wala zero hai ye sirf element ka index number hai or ye sirf index number deta hai jo bhi ek value satisfy ho gyi to ni to -1
// or agr ek bhi condition agr satisfy ni karega to ye return karega -1.






// 4.-  filter()  ✌️ // isme 400 se choti price hai sab chhaiye
const price = [100, 400, 300, 200, 250, 130 ,600]

const newPrice = price.filter((elem,indx,arry) =>{return elem < 400 })
console.log(newPrice) // ye sabse acha agr consdition satisfy ho gyi to ye new array bna dega variable me , agr condition staisfy nhi hui to simple empty array dega





// 5.- sort() ✌️ // ye alphabetically order me sort kar dega.
const months = ["dec", "may", "april" ,"october" ]
console.log(months.sort())

// agr same method ko hum number me kare to.
const numx = [12, 45, 43, 1009, 889]
console.log(numx.sort()) // ye alphabetically order dekhta hai.






// Perform CRUD (create read update delete)

// 6.- push() ✌️
const animals = ["pigs", "goats", "sheep"]
console.log(animals.push("chicken"), animals) // it returns the new length to the array, ye peche se add karta hai


// 7.- unshift() ✌️
const animalss = ["pigs", "goats", "sheep"]
console.log(animalss.unshift("cow"), animalss) // ye aage se add karta hai , ye bhi new length return karta hai.


// 8.- pop() ✌️
const appli = ["tv", "radio", "phone"]
console.log(appli)
console.log(appli.pop())
console.log(appli) // ye peche se remove karta hai , ye method length decrease karta hai.


// 9.- shift() ✌️
const applic = ["tv", "radio", "phone"]
console.log(applic)
console.log(applic.shift())
console.log(applic)  //ye aage  se remove karta hai , ye method  bhi length decrease karta hai.




// 10.- splice() ✌️ method ---> ye return karta hai vese dlt wala item 
// complete crud hota hai splice method. 

const mont = ["Jan", "march", "April", "June", "July"]

// Dec ko sabse end me add karna hai...splice method se push se nhi
const newMont = mont.splice(5,0,"Dec") //()isme pehle number dekhte kis number pr le jana hai , second ye dekhna hai delet karna hai to number delete wala ya ni karna to 0, jo add karna hai vo 
console.log(mont)


// dlt June from mont
const dltItem = mont.splice(3,1) //isme 3rd space update ka hota hai to humko update to ni krna sirf dlt krna hai to uska index , 1
console.log(mont)
console.log(dltItem)



// update march  to March
const updt = mont.splice(1,1,"March") // isme 1 march ka index number hai or dlt karna hai to 1 likh do or new data add kar diya hai
console.log(mont)




// 11.- Map() ✌️  // return result  in new array
// ! map() method ke sath hum or bhi method use kar skte hai usi line me filter(), reduce(), sort() lekin forEach me ni kar skte.
const numxx = [16, 12, 23, 32, 9, 4, 8]
// jo 9 se bda hai vo chhaiye

let newArr = numxx.map((element,index,array)=>{
    return element > 9
})
console.log(newArr) // ye hamesa new array return karta hai..
console.log(numxx) 


let aNew = numxx.map((element,index,numxx)=>{
    return `Index no = ${index} and the value is ${element} belong to ${numxx}`
}) 
console.log(aNew) // ye new array return karta hai original data ko nhi chedta .




// ! find the square root of each element of an array 
let arrayA = [25,36,49,64,81]
let arrSqurRt = arrayA.map((elememt,index,array)=>{
    return Math.sqrt(elememt) //Math Object me ye inbuild function hai..
})
console.log(arrSqurRt)



// ! Multiply each element of 2 and return only those are greater than 10
let arrB = [2,3,4,5,6,7,9]
let arrB2 = arrB.map((element,index,array)=>{
    return element*2
}).filter((elememt)=>{ // is ko bolte hai chaining method yhi fayda hai map() method ka
    return elememt > 10
})
console.log(arrB2)







//! Reduce() ✌️ method (to convert a 3d or 2d array in single dimensional array)
// *reduce() method (ye 4 arrgument leta hai..[1.]-->accumalator,  [2.]--> element,  [3.]---> index,   [4.]---> source array)

// ? uper wale question me ye or hota ke jo new value hai  arrB2[ke element]  unka sum ya product ya average ya percentage chhaiye mtlv single number value chhiaye  tab kya karte  hum...
// * let see this with new array..

let newArr1=[5,6,2]
let sum = newArr1.reduce((accumulator,elememt,index,array)=>{  // accumulator ka mtlv hota hai ek jgh ekkatha hona
        return accumulator *= elememt
})
console.log(sum)







// ab 2d ya 3d array ko flat array me convert krna hai to
let arr2d = [
    ["zone1","zone2"],
    ["zone3","zone4"],
    ["zone5","zone6"]
]

let flatArr = arr2d.reduce((accum,elememt)=>{
    return accum.concat(elememt)
})
console.log(flatArr)









// ! find the second smallest number in an array----->
const array = [32, 22, 53, 92, 20, 34, 23, 11, 17];
let smallestNum = array[0];
let secondSmallestNum = 0;
for (let i = 1; i < array.length; i++) {
  if (array[i] < smallestNum) {
    secondSmallestNum = smallestNum;
    smallestNum = array[i];
  } else if (array[i] !== smallestNum && array[i] < secondSmallestNum) {
    secondSmallestNum = array[i];
  }
}

console.log(smallestNum);
console.log(secondSmallestNum);







// ! find the second largest in an array...--->
var secondMax = function (){ 
    var arr = [20, 120, 111, 215, 54, 78]; // use int arrays
    var max = Math.max.apply(null, arr); // get the max of the array
    arr.splice(arr.indexOf(max), 1); // remove max from the array
    return Math.max.apply(null, arr); // get the 2nd max
};

















  