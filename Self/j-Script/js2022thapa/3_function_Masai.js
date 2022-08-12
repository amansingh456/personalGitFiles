// ! Function ==>


// * multiply two numbers
// Do your problem without function using first---

function mul () {
    let a = 9
    let b = 3
console.log(a*b)
}
mul()

// ? Function will only run when i m calling it , it will run multiple times if i am calling it multiple times...




// * Write four function to perforom additon, substraction , multiplication , division
function mulx () {
    let a = 9
    let b = 3
console.log(a*b)
}
mulx()

function sumx () {
    let a = 9
    let b = 3
console.log(a+b)
}
sumx()

function subx () {
    let a = 9
    let b = 3
console.log(a-b)
}
subx()

function divx () {
    let a = 9
    let b = 3
console.log(a/b)
}
divx()






// * Print the name 20 times

function namex () {
    let name = "Rajawat"
    console.log(name)
}
for(i=1;i<=20;i++){
    namex()
}
// ? Calling statement is responisble for a running the function.





// ! Parameters in function ---->
function thor(x,y){
    console.log(x*y)
}
thor(9,9)




// * what is the output -->
function print(flag){
    let arr = [1,2,3,4,6,8]
    let sum = 0
    for(i=0;i<=arr.length-1;i++){
        if(flag===true && arr[i]%2==0){
            sum+=arr[i]
        }
    }console.log(sum)
}
print(true) //  20 will print.










// ! Return Statement -->  (if one function is dependent on another function then i will use return method)

function reT(a,b){
    return a+b  // the function will return ans to the calling statement. 
}
console.log(reT(4,3))












// ! Scope of a function--->

// * let function ke ander ho to function ke ander hi chalega , or var sab jagh chal jayega 


// agr let function ke ander hai to fir vo ander hi chalega to use hum local scope kahege, or age wahi koi let function ke bahr hai to vo chl jayega to use hum Global scope kahege...





















// ! Problem Based on function ...

// * check if the number is even or odd, if yes then return otherwise return false

function checkEvenOdd(num){
    // let num = 2
if(num%2==0){
    return true
}
else{
    return false // Return Means ---> take the output and go to the calling statement.
}
}
// checkEvenOdd(4)

if(checkEvenOdd(9)===true){
    console.log("Even")
}
else{
    console.log("Odd")
}



// use the same function print even numbers to 2 to 20
for(i=2;i<=20;i++){
    if(checkEvenOdd(i)==true){
        console.log(i,"is even")
    }
}


//  Use the same function to print odd numbers between a given limit

for(i=2;i<=20;i++){
    if(checkEvenOdd(i)==false){
        console.log(i,"is Odd")
    }
}

// Using the same function count even numbers btw 1 to 100

let count = 0
for(i=1;i<=100;i++){
    if(checkEvenOdd(i)==true){
        count++
        // console.log(i,"is even")
    }
}
console.log(count)














// * reverse the string by function

function reverse(str) {
    let bag = ""
    for(i=str.length-1;i>=0;i--){
        bag=bag+str[i]
    }
    console.log(bag)
}

reverse("manamana")


// use the above question check if a string is palindrome or not

function reverse(str) {
    let bag = ""
    for(i=str.length-1;i>=0;i--){
        bag=bag+str[i]
    }
    return bag;
}

// reverse("manamana")
let string = "amanama"
if(reverse(string)==string){
    console.log("Yes")
}
else{
    console.log("No")
}












// * Write a function to multiply each element of array 

function mulOfArr(arr1,arr2) {
    // let arr1 = [2,3,4]
    // let arr2 = [2,3,4]

    let emptyArr = []

    for(i=0;i<=arr1.length-1;i++){
        emptyArr.push(arr1[i]*arr2[i])
    }

    return emptyArr
}


// Print the numbers gretaer then 100 in the product
let arr = mulOfArr([23,32,49],[2,3,7])

for(i=0;i<=arr.length-1;i++){
    if(arr[i]>100){
        console.log(arr[i])
    }
}