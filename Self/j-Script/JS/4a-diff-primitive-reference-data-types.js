// primitive vs refrence data types

// primitive data type


let num1 = 5
let num2 = num1
console.log(num1)
console.log(num2)
num1++
console.log('after num1 increment')
console.log(num1)
console.log(num2)
// yha esa isliye ho rha hai kyoki primitive data type stack me jate hai , or jitne bhi variable banayege vo sab apni apni jagah save hote jayege mtvl agr hum num1 ka increment karaya to sirf wahi change ho jayega jo dusra hai use koi mtlv nhi









//refrence data types (abhi tak humne ek hi refrence type pda hai.. vo hai array)


let array1 = ['item1','item2']
let array2 = array1
console.log(array1)
console.log(array2)
array1.push('item3')
console.log('after pushing element in array 1')
console.log(array1)
console.log(array2)

// yha isliye esa ho rha hai kyoki refrence data type heap me store hota  hai or isme agr ek change kiya to dusra bhi change ho jayega 