// let arr = [1,2,["aman",21]]
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[2][0])
// console.log(arr[2][1])
// console.log(arr)
















// let arrx = [["Hitesh", 23],["ajay",32]]

// let newArr = arrx.reduce((accum,elem)=>{
//     return accum.concat(elem)
// })
// console.log(newArr) // yha concat function isliye kam kar rha hai kyoki array squre matrix hai...


















// let arr2d = [
//     ["zone1","zone2"],
//     ["zone3","zone4"],
//     ["zone5","zone6"]
// ]

// let flatArr = arr2d.reduce((accum,elememt)=>{
//     return accum.concat(elememt)
// })
// console.log(flatArr)









// let ar = [["aman",23,"Gwl"],["amit",23,"bhind"]]
// console.log(ar[0][0])
// console.log(ar[1][2])
// // console.log(ar[2][1]) // 2 is undifined so it can read to [2] of 1.
//  console.log(ar[0][0][3])  // [0][0] is now at aman and now [3] so it will print n
//  console.log(ar[1][1][3]) // bcoz number does not have indexex .. so undifined





 // ! diff. btw multidimensional arrays and matrices...
 
 // ? Multi arrays                             
// a1=[
//     ["a","b","c"],
//     ["a","b"],
//     [1,2,3,4,6,7,8,9]
// ]// this is a 2D array, length of the children array is not same





 // ? Matrices 
//  a2=[
//     [1,2,3,4,4,5],
//     [3,4,6,7,8,9],
//     [2,4,3,4,2,8]
//  ] // in this matrices  , childern array's length is always same, (mtlv ki for each row no. of column should be same . so. it is a 3*6 matricx)
// //  all the matrices are always a multidimensional array but all multidimensional array is not a matrix 









 // ! Rows & Column in Matrix --->
// //* if the matrix is there so, arr.length is  row and inside array any element.length give no. of columns
// let arx = [
//     [1,2,3],
//     [4,6,5],
//     [7,8,9]
// ]

// // console.log(arx.length)  //=> this wiil always gives No. of rows
// // console.log(arx[0].length) 
// // console.log(arx[1].length) //=> in 3no mese koi bhi no of column dega
// // console.log(arx[2].length)



















 // ! loops in 2D array --->

let arrx = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// Direct Value likni ho to ..but in different line 
for(i=0;i<arrx.length;i++){
    for(j=0;j<arrx[0].length;j++){
        console.log(arrx[i][j])
    }
    
}

// // dusre pattern me print krna ho to...(simple j yani ki column wale number pehle likh do)
// for(i=0;i<arrx.length;i++){
//     for(j=0;j<arrx[0].length;j++){
//         console.log(arrx[j][i])
//     }
    
// }

// // agr value 123 ese likhna ho to 
// //           456
// //           789
// for(i=0;i<arrx.length;i++){
//     let bag = ""
//     for(j=0;j<arrx[0].length;j++){
//         bag=bag+arrx[i][j]+" "
//     }
//     console.log(bag)
// }
 














//? array ke ander value likhni ho to..
// let newarrx = arrx.reduce((a,e)=> a.concat(e) )
// console.log(newarrx)













 // ! print all elements  of 3*4 matrix -->

// let matr = [
//     ["a","b","c","d"],
//     ["e","f","g","h"],
//     ["i","j","k","l"]
// ]

// for(i=0;i<matr.length;i++){
//     for(j=0;j<matr[0].length;j++){ // yha hume column ke liye length leni hai to koi bi row ki length le lo matr[0] ya matr[1] ya matr[2]
//         console.log(matr[i][j])
//     }
// }


 // ! what ever is fixed is our outer loop and what ever is chnaging is our inner loop

// for(i=0;i<matr[0].length;i++){
//     for(j=0;j<matr.length;j++){
//         console.log(matr[j][i])
//     }
// }










// let arr2d = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [1,9,3,7]
// ]
// let row = arr2d.length
// let col = arr2d[0].length

// for(i=0;i<row;i++){
//     for(j=0;j<col;j++){
//         console.log(arr2d[i][j])
//     }
// }
















 // ! find all the diagonals  of given element (j)
// let k = 10
// let met = [
//             [1,2,3,4],
//             [5,6,7,8],
//             [9,10,11,12],
//             [13,14,15,16],
// ] 

// let rowx = met.length
// let colx = met[0].length

// let sum=0 ;
// let diff=0 ;
// for(i=0;i<rowx;i++){
//     for(j=0;j<colx;j++){
//         if(met[i][j]==k){
//             sum=i+j
//             diff=i-j
//             break
//         }
//     }
// }



// let d1 = ""
// for(i=0;i<rowx;i++){
//     for(j=0;j<colx;j++){
//         if(i-j==diff){
//             d1+=met[i][j]+" "
//         }
//     }
// }

// let d2 = ""
// for(i=0;i<rowx;i++){
//     for(j=0;j<colx;j++){
//         if(i+j==sum){
//             d2+=met[i][j]+" "
//         }
//     }
// }

// console.log(d1,d2)
















// ! calculate the odd sum in all row
// let row = 3
// let col = 3
// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]


// for(i=0;i<row;i++){
//     let sumx=0
//     for(j=0;j<col;j++){
//         if(arr[i][j]%2!=0){
//             sumx=sumx+arr[i][j]
//         }
//     }
//     console.log(sumx)
// }




 // ! spiral matrix

// // let ro =7
// // let co =7
// let spiral = [
//     ["a","b","c","d","e","f","g"],
//     ["h","i","j","k","l","l","m"],
//     ["o","p","q","r","s","t","u"],
//     ["v","w","x","y","z","1","2"],
//     ["3","4","5","6","7","8","9"],
//     ["AA","BB","CC","DD","EE","FF","GG"],
//     ["II","JJ","KK","LL","MM","NN","OO"],
// ]
// // let ro =spiral.length+1
// // let co =spiral[0].length+1

// let left = 0
// let right = spiral.length
// let top = 0  
// let bottom = spiral.length
// let temp = ""
// while(top<bottom && left<right){
//     for(i=left;i<=right;i++){
//         temp+=spiral[top][i]=" "
//     }
//     top++
//     for(i=top;i<=bottom;i++){
//         temp+=spiral[i][right]+" "
//     }
//     right--
//     for(i=right;i>=left;i--){
//         temp+=[bottom][i]+" "
//     }
//     bottom--
//     for(i=bottom;i>=top;i--){
//         temp+=spiral[i][left]+" "
//     }
//     left++
// }
// console.log(temp)