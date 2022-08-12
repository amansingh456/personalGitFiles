//! Reomve Uppercase and then print
// let str="MasAi"
// let ch="abcdefghijklmnopqrstuvwxyz"
// let str1=""
// for( var i=0;i<=str.length-1;i++){
// 	for(let k=0;k<=ch.length-1;k++){
// 		if(str[i]==ch[k]){
// 			str1=str1+str[i]
// 		}
// 	}
	
// }
// console.log(str1)



// ! multiply and then sum of two array
// let arr1 = [100,20,40]
// let arr2 = [2,1,2]
// // let b = arr1.reduce((accumulator,elememt,index,array)=>{
// //     return accumulator+elememt*arr2[index]
// // },0)
// // console.log(b)
// let xxx = 0
// for(i=0;i<=arr1.length-1;i++){
//     xxx+=arr1[i]*arr2[i] 
// }
// console.log(xxx)


//! Product of even indexes...
//  let n = 4
//  let arr = [1,2,3,4]
 
//  let even = 1
//  let odd = 1  

//  for(i=0;i<n;i++){
//     if (i % 2 == 0)
//     even *= arr[i];
// else
//     odd *= arr[i];
//  }
//  console.log(even)






// ! Factorial of a number ...
let num = 5
let facT = 1
for(i=5;i>=1;i--){
    facT=facT*i
}
console.log(facT)







// ! Two String from One... (vowel and consonant print alg alg)
let str = "nrupul"
let N = 6
// (consonant and vowel alg alg print karna hai....)
let vowel=""
let conso=""
for(i=0;i<=str.length-1;i++){
    if(str[i]=="a"||str[i]=="o"||str[i]=="i"||str[i]=="e"||str[i]=="u"){
        vowel=vowel+str[i]
    }
    else{
        conso=conso+str[i]
    }
}
console.log(vowel+"\n"+conso)