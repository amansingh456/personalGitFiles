// FOR LOOP....

var arr = [1, 4, 3, 2, 6, 5, 7, 9, 8]
console.log(arr)
// Ab muje atterate karna chahta hu mtlv sari value ek ek karke dekhna chhata hu to hum "FOR" loop lga rahe hai



//'FOR' loop
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}// ye dekho sari value ek ek karke print ho jayega


// 2nd METHOD  -> 'FOREACH loop'
arr.forEach(function (counts) {
    console.log(counts)
})
// Ek array ki value ek ek karke likhni ho to sabse acha tareeka 'FOREACH' loop hi hai..


// While loop

i=21
while(i<=35){
    console.log(i)
    i++
}