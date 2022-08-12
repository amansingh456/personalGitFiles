let arr = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
]

let row = arr.length
// console.log(row)
let col = arr[0].length
// console.log(col)












//! ----> print in this direction
// for(i=0;i<row;i++){
//     for(j=0;j<col;j++){
//         console.log(arr[i][j]);
//     }
// }














//! print downwards direction...
// for(i=0;i<col;i++){
//     for(j=0;j<row;j++){
//         console.log(arr[j][i])
//     }
// }













//! print in left direction
// for(i=0;i<row;i++){
//     for(j=col-1;j>=0;j--){
//         console.log(arr[i][j])
//     }
// }











// ! print exactly like upper 

// for(i=0;i<row;i++){
//     let bag = ""
//     for(j=0;j<col;j++){
//         bag+=arr[i][j]+" "     
//     }
//     console.log(bag)
// }















//! even index then  ----> , odd index   <----
// for(i=0;i<row;i++){
//     let bag = ""
//     if(i%2==0){
//         for(j=0;j<col;j++){
//             bag+=arr[i][j]+" "
//         }
//     }
//     else{
//         for(j=col-1;j>=0;j--){
//             bag+=arr[i][j]+" "
//         } 
//     }
//     console.log(bag)
// }




















// ! find the index of any target
// let target = "h"
// let target_row_index;
// let target_col_index;
// for (i = 0; i < row; i++) {
//     for (j = 0; j < col; j++) {
//         if (arr[i][j] == target) {
//             target_row_index = i
//             target_col_index = j
//             break
//         }
//     }
// }
// console.log(target_row_index, target_col_index)












// //! "e" ki sabhi diagonal print karo...
// let target = "e"
// let row_index;
// let col_index;
// for(i=0;i<row;i++){
//     for(j=0;j<col;j++){
//         if(arr[i][j]==target){
//             row_index=i
//             col_index=j
//             break;
//         }
//     }
// }
// // console.log(row_index,col_index)

// let diff = row_index-col_index
// let sum = row_index+col_index

// let d1=""
// for(i=0;i<row;i++){
//     for(j=0;j<col;j++){
//         if((i-j)==diff){
//             d1+=arr[i][j]+" "
//         }
//     }
// }
// let d2 = ""
// for(i=0;i<row;i++){
//     for(j=0;j<col;j++){
//         if((i+j)==sum){
//             d2+=arr[i][j]+" "
//         }
//     }
// }
// console.log(d1+"\n"+d2)









// ! check in particular row is any vowel then yes otherwise no
// for(i=0;i<row;i++){
//     let flag=0
//     for(j=0;j<col;j++){
//         let element = arr[i][j]
//         if(element=="a"||element=="e"||element=="i"||element=="o"||element=="u"){
//             flag++
//             break
//         }
//     }
//     if(flag>0){
//         console.log("Yes")
//     }
//     else{
//         console.log("No")
//     }
// }





// ? is se pehle ke sare question tp wale array se hi solve hue hai...















let arr2 = [
    ["a", "b", "c", "p", "q"],
    ["d", "e", "f", "r", "s"],
    ["g", "h", "i", "t", "u"],
    ["j", "k", "l", "v", "w"],
    ["m", "n", "o", "x", "y"],
]
let n = 5
let rowx = arr2.length
// console.log(row)
let colx = arr2[0].length
// console.log(col)





// ! print both the diagonal of the matrix ... 
// let rgt_dia = ""
// let lft_dia = ""
// for(i=0;i<rowx;i++){
//     for(j=0;j<colx;j++){
//         if(i==j){
//             rgt_dia+=arr2[i][j]
//         }
//         if((i+j)==n-1){
//             lft_dia+=arr2[i][j]
//         }
//     }
// }
// console.log(rgt_dia+"\n"+lft_dia)
















// ! print in the form of snake OR say it like even index ---->, odd index  <-----

// for(i=0;i<rowx;i++){
//     if(i%2==0){
//         for(j=0;j<colx;j++){
//             console.log(arr2[i][j])
//         }
//     }
//     else{
//         for(j=colx-1;j>=0;j--){
//             console.log(arr2[i][])
//         }
//     }
// }














// ? is se pehle ke sare question tp wale array se hi solve hue hai...




let narr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
let m = 4



// ! sum of the cols....
// for(i=0;i<m;i++){
//     let sum = 0
//     for(j=0;j<m;j++){
//         sum+=narr[j][i]

//     }
//     // break
//     console.log(sum)
// }






// ! sum of the each index
// total=""
// for(i=0;i<m;i++){

//     for(j=0;j<m;j++){
//         // console.log(narr[i][j])
//         total+=(i+j)+" "

//     }
//     total=total+"\n"

// }
// console.log(total)








// ! sum of each row only even elemnts

// for(i=0;i<m;i++){
//     let bag = 0
//     for(j=0;j<m;j++){
//         if(narr[i][j]%2==0){
//             bag+=narr[i][j]
//         }
//     }
//     console.log(bag)
// }














// ! N traversal 

// for (i = 0; i < m; i++) {
//     for (j = m - 1; j >= 0; j--) {
//         console.log(narr[j][i])
//     }
//     break
// }
// for (i = 1; i < m; i++) {
//     for (j = 1; j < m; j++) {
//         if (i == j) {
//             console.log(narr[i][j])
//         }
//     }

// }
// for(i=m-1;i>=0;i--){
//     for(j=m-2;j>=0;j--){
//         console.log(narr[j][i])
//     }
//     break
// }
// ? ans. is se bhi aa rhai hai lekin ye galt method hai...

// * we will use this one...--->
// let bag = ""
// for(i=m-1;i>=0;i--){
//     bag+=narr[i][0]+" "
// }
// for(i=1;i<m;i++){
//     bag+=narr[i][i]+" "
// }
// for(i=m-2;i>=0;i--){
//     bag+=narr[i][m-1]+" "
// }
// console.log(bag)













// ! only outer loop ---> (13 9 5 1 2 3 4 8 12 16 15 14)
// let temp = ""
// for(i=m-1;i>=0;i--){
//     temp+=narr[i][0]+" "
// }

// for(i=1;i<m;i++){
//     temp+=narr[0][i]+" "
// }

// for(i=1;i<m;i++){
//     temp+=narr[i][m-1]+" "
// }

// for(i=m-2;i>0;i--){
//     temp+=narr[m-1][i]+" "
// }
// console.log(temp)





















// ! only outer spiral ---> (1 2 3 4 8 12 16 15 14 13 9 5)
// let bagx = ""
// for(i=0;i<m;i++){
//     bagx+=narr[0][i]+" "
// }
// for(i=1;i<m;i++){
//     bagx+=narr[i][m-1]+" "
// }
// for(i=m-2;i>=0;i--){
//     bagx+=narr[m-1][i]+" "
// }
// for(i=m-2;i>0;i--){
//     bagx+=narr[i][0]+" "
// }
// console.log(bagx)











// ! full spiral in inner also ---> ()
let a = 7
let matrix = [
    ["a00","a01","a02","a03","a04","a05","a06"],
    ["a01","a11","a12","a13","a14","a15","a16"],
    ["a02","a21","a22","a23","a24","a25","a26"],
    ["a03","a31","a32","a33","a34","a35","a36"],
    ["a04","a41","a42","a43","a44","a45","a46"],
    ["a05","a51","a52","a53","a54","a55","a56"],
    ["a06","a61","a62","a63","a64","a65","a66"],
]

// let top =0  
// let bottom = a-1  
// let left =0  
// let right =  a-1

// while(top<bottom && left<right){
//     let temp=""
//     for(i=left;i<=right;i++){
//         temp+=matrix[top][i]+" "
//     }
//     top++

//     for(i=top;i<=bottom;i++){
//         temp+=matrix[i][right]+" "
//     }
//     right--
//     for(i=right;i>=left;i--){
//         temp+=matrix[bottom][i]+" "
//     }
//     bottom--
//     for(i=bottom;i>=top;i--){
//         temp+=matrix[i][left]+" "
//     }left++
//     console.log(temp)
// }




// ! same with second matrix

let b = 5
let mat = [
    [01,02,03,04,5],
    [16,17,18,19,6],
    [15,24,25,20,7],
    [14,23,22,21,8],
    [13,12,11,10,9],
]

// let tp = 0
// let btm = b-1
// let lft = 0
// let rt = b-1

// while(tp<btm && lft<rt){
//     let jhola = ""
//     for(i=lft;i<=rt;i++){
//         jhola+=mat[tp][i]+" "
//     }tp++
//     for(i=tp;i<=btm;i++){
//         jhola+=mat[i][rt]+" "
//     }rt--
//     for(i=rt;i>=lft;i--){
//         jhola+=mat[btm][i]+" "
//     }btm--
//     for(i=btm;i>=tp;i--){
//         jhola+=mat[i][lft]+" "
//     }lft++
    
//     console.log(jhola)
// }


























// ! in 1d array find the heighest frequency of the element
// let z = 10
// let array = [1, 2, 2, 1, 1, 1, 4, 1, 5, 1]



// function fun(array, z) {
//     let obj = {}
//     for (i = 0; i < z; i++) {
//         let char = array[i]
//         if (obj[char] == undefined) {
//             obj[char] = 1
//         }
//         else {
//             obj[char]++
//         }

//     }

//     let maxi = -Infinity
//     let element = 0
//     for (key in obj) {
//         if (obj[key] > maxi) {
//             maxi = obj[key]
//             element = key
//         }
//     }

//     // console.log(maxi)
//     console.log(element+"-"+maxi)
// }
// fun(array,z)



