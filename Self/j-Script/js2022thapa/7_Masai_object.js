// ! OBJECTS ===>
// Objects is a DataStructure  or we can say that  Data type also.
//* Objects also called Key Value Pair






let details = {
    name:"Ajay",
    age:25,
    location:"Gwl",
    math:"13",
    eng:"47",
    phy:"89",
    hobbie:["Biking","Gambling","Clubbing"]
}

console.log(details.age);// this is dot notation , we can check by["age"] this also.
console.log(details.length); // ther is no length property of object. So, there is no index concept as well.


// ! Updating
details.age=76
console.log(details["age"])
console.log(details); 









// ! Adding at last
details["enemy"] = "kilvish" // if key is present in object then it will get updated , and when key is not present in object then it will get Added.
console.log(details);







// ! How to dlt something

delete details["math"]
console.log(details);





// ! In order to see many things in one varibale we store in array

console.log(details["hobbie"])
console.log(details["hobbie"][1])

let arr = details["hobbie"]
for(i=0;i<=arr.length-1;i++){
    console.log(arr[i])
}


// ! Add new thing in array or details["hobbie"]

arr.push("dancing")
console.log(details)


























// ! Question ---> esa Output chhaiye...
/* name is chunnu
   age is 20
   he lives at manali
   His hobbies are coding, gambling, singing
 */

   
let det2 = {
    name:"chunnu",
    age:"20",
    lcn:"manali",
    hobbies:["coding", "gambling", "singing"]
}   

console.log("Name is",det2["name"])
console.log("Age is",det2["name"])
console.log("He lives at", det2["name"])

let bag=""
for(i=0;i<=det2["hobbies"].length-1;i++){
    if(i<=det2["hobbies"].length-2){
        bag=bag+det2["hobbies"][i]+"," 
    }
    else{
        bag=bag+det2["hobbies"][i] 
    }
    
}
console.log("His Hobbies are",bag)


















// ! Nested Object --->

let det3 = {
    name:"Aman",
    age:"20",
    address:{
        city:"gwl",
        pin:"474005",
        house:"03"
    }
}

console.log(det3["address"]["pin"]) // is se object ke ander wale object ka data mil gaya

det3["address"]["state"]="MP"  // ye state tha ni address me to add ho gya vrna update ho jata

console.log(det3)







// ! for in loop ---> (Don't Worry about the index, i will work using keys , and i will take care of them)


let obj = {
    name:"munnu",
    age:"32",
    lcn:"Gwl"
}

for( let i in obj){
    console.log(i,":",obj[i])
}















































// ! Second Session OF OBJECT  ------->
// ? For in loop will work in object only...



// Given a string print how many time chr are appear

let str = "aabbccd"
let Newobj = {}

for(let i=0;i<str.length;i++){
    let chr = str[i]
    if(Newobj[chr]==undefined){
        Newobj[chr]=1
    }
    else{
        Newobj[chr]++
    }
}
console.log(Newobj)




















//  what is the frequency of each element

let arrx = [7,2,3,4,4,3,4,1]

let newobjx = {}
for(let i=0;i<arrx.length;i++){
    let elem=arrx[i]
    if(newobjx[elem]==undefined){
        newobjx[elem]=1
    }
    else{
        newobjx[elem]++
    }
}
console.log(newobjx)















// find the sum of elemnts whose occurance is 2
let arxs = [7,2,7,7,3,4,4,2]
let objsum = {}

for(let i=0;i<arxs.length;i++){
    let ele=arxs[i]
    if(objsum[ele]==undefined){
        objsum[ele]=1
    }
    else{
        objsum[ele]++
    }
}
// console.log(objsum)  i have to add those element who comes 2 times
let sum=0
for(key in objsum){
    if(objsum[key]==2){
        sum=sum+Number(key)
    }
}
console.log(sum)
// if you have to find only unique number sum then (mtlv har number ko ek bar add kr ke sum chhaiye ho to)

let sum2 = 0
for(key in objsum){
    sum2=sum2+Number(key)
}
console.log(sum2)

















// find the elements whose occurance is 1
let arx = [3,4,2,1,2,21,3,4,5]
let obje = {}
for(let i=0;i<arx.length;i++){
    let elem = arx[i]
    if(obje[elem]==undefined){
        obje[elem]=1
    }
    else{
        obje[elem]++
    }
}
// console.log(obje)
for(key in obje){
    if(obje[key]==1){
        console.log(key) 
    }
}













// Get the names of those emps who have salary more than 25000
let employee_data = [
    {name:"ajay",age:23,salary:34000},
    {name:"aj",age:24,salary:24000},
    {name:"aman",age:25,salary:32000},
    {name:"chunnu",age:21,salary:30000},
]

for(i=0;i<employee_data.length;i++){
    if(employee_data[i].salary>25000)
    console.log(employee_data[i].name)
}

// Calculate the avg salary of all the employees-->

let s=0
// let c=0

for(i=0;i<employee_data.length;i++){
    s=s+employee_data[i].salary
    
}
console.log(s/employee_data.length)














//  two array combined in an array object..
let products = ["mackbook","airpods","ipad","iphone"]
let price = ["121000","21000","55000","78000"]
/* output should be like this --->
[
    {name:"macbook",rupees:121000},
    {name:"airpods",rupees:21000},
    {name:"ipad",rupees:55000},
    {name:"iphone",rupees:78000}
]
*/

let mptArr = []

for(i=0;i<products.length;i++){
    let mptObj = {}
    mptObj["name"]=products[i]
    mptObj["rupees"]=price[i]
    mptArr.push(mptObj)

}
console.log(mptArr)