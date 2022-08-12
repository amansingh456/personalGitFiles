//  ! String --->

let a = "" // this is a empty string
let b = " " // it has a Space chracter


let school = "Masai School"
console.log(school.length) // length find krna ho to



// Access to each chracter

console.log(school[5]) // is se space milega
console.log(school[6]) // is se S milega
console.log(school[2]) // is se s milega
console.log(school.length-1) // is se total index mil gaya, ya last index mil gaya
console.log(school[school.length-1]) // is se last index ka chracter mil gaya






























// ! Application of String and length Property

let pass = "1234567"
if(pass.length<=6){
    console.log("Minimum 6 chracter are needed")
}
else{
    console.log("It is a Strong PassWord")
}

















// ! print all the chracters of string in Seprate line.
let nam = "Steve Rogers"
for(i=0;i<nam.length;i++){
    console.log(nam[i])
}
for(elem of nam){
    console.log(elem)
}
//  Horizantly me print karna hai to.. simple console.log(name) kar do. Bag lene ki Jrurat nhi hai.. 

























// ! Update a String Or Replace the chracter of String
// We  simply can't do that change or Replace the chrachter.
// ? But 2 method are there...(By converting in array first)

let namex = "Ronald"

// take an empty array first
let arrx = []
for(let i=0; i<namex.length;i++){
    arrx.push(namex[i])
}
console.log(arrx)

// change "R" with "D"
arrx[0]="D"

// Again convert this array to string
let newStrNamex = ""
for(j=0;j<arrx.length;j++){
    newStrNamex=newStrNamex+arrx[j]
}
console.log(newStrNamex) // Converted...!😊



// todo: Most Efficient method  is this( jo pulkit ne nhi padaya)...
let updatedNamex = namex.replace("R","D")
console.log(updatedNamex)





// ? 2nd (By Simple Method (Concatination Method))

let OldName = "Ronald"

// let take a new string
let NewName =""

for(i=0;i<OldName.length;i++){
    if(i==0){ // (OldName[i]=="R") , agar jisko change karna ho uska index ni pata to ese kar skte hai..
        NewName=NewName+"D"
    }
    else{
        NewName=NewName+OldName[i]
    }
}
console.log(NewName) //Converted ..! 😊
 































// ! How to add Something at the end of String
// Conacatination Method
let myName = "Aman"
let myFullName = myName+"Singh"
console.log(myFullName)









// ! dlt From end
let newStr = ""
for(i=0;i<=myName.length-2;i++){
    newStr=newStr+myName[i]
}
console.log(newStr)


// todo:  (ye pulkit ne ni padaya)
let specialMyName = myName.slice(0,3)
console.log(specialMyName)














// ! dlt something in Middle
let yrName = "Superman"
// dlt r form it

let newYrName = ""
for(i=0;i<yrName.length;i++){
    if(yrName[i]=="r"){ //(insem index pta chl ajye to or bhi acha i==indexValue likh do.)
        continue;
    }
    // else{
    //     newYrName=newYrName+yrName[i]
    // }
     newYrName=newYrName+yrName[i] //ye without else bhi kar skte hai..
}
console.log(yrName)
console.log(newYrName)



// ? agr sirf dlt krna ho middle me kahi kuch bas line me na likte hue direct print krna ho to (ye simple method hai...--->)

let str = "amanamanSingh"
for(elem of str){
    if(elem=="S"){
        continue;
    }
    console.log(elem)
}























// ! Add any chrcater in minddle..
// Adding "A" to 6th index 
// 1st Method..
let startingName = "superman"
let jhola = ""
for(i=0;i<=5;i++){
    jhola=jhola+startingName[i]
}
console.log(jhola)

jhola=jhola+"A"

for(j=startingName.length-2;j<=startingName.length-1;j++){
    jhola=jhola+startingName[j]
}
console.log(jhola)

// 2nd Method..

let fakeName = "superman"
let realName = ""
for(i=0;i<=fakeName.length-1;i++){
    realName=realName+fakeName[i]
    if(fakeName[i]=="m"){
        break
    }
}
console.log(realName)

realName=realName+"A"

for(j=fakeName.length-2;j<=fakeName.length-1;j++){
    realName=realName+fakeName[j]
}
console.log(realName)




















// ! Count the name starting from A

let arr = ["Amit","Aman","Dev","Ankit","Chandu","Rahul","Sujal","Yashu","Arav"]

let count = 0
for(i=0;i<=arr.length-1;i++){
    let stringx = arr[i]
    if(stringx[0]=="A"){
        count++
    }
}
console.log(count)

















// ! count the names that contains atleast one A
let arr2= ["amit","aman","dev","ankit","chandu","rahul","sujal","yashu","arav","nrupul","sonu"]
let count2 = 0
for(i=0;i<=arr2.length-1;i++){
    let strin=arr2[i]
    for(j=0;j<=strin.length-1;j++){
        if(strin[j]=="a"){
            count2++
            break
        }
    }
}
console.log(count2)



// ! Print All substrings with starting and ending same chracter - 
let strn = "masai"
let N = 5

let countt = 0
for(i=0;i<N;i++){
    let bag = ""
    for(j=i;j<N;j++){
        bag+=strn[j]
        let length = bag.length
        if(bag[0]===bag[length-1]){
            countt++
        }
        // console.log(bag)
    }
    
}
console.log(countt)

// * Printing another substring (symbol ki jagh pr space bhi ho skte hai..)
let stry = "a@b#c$"
let Nx = 5

for(i=0;i<Nx;i++){
    let bag = ""
    for(j=i;j<Nx;j++){
        bag+=stry[j]
        console.log(bag)
    }
    
}










// ! Print the uniqe number in two array

    var arr1 = [4,7,5]
    var arrs = [9,5,2]
    //write code here
    let unique = []
    for(var i=0;i<=arr1.length-1;++i){
        for(var j=0;j<=arrs.length-1;++j){
            if(arr1[i]==arrs[j]){
                unique.push(arr1[i])
            }
        }
    }
    console.log(unique)

