// let arr = [1,2,3,4,5,6]
// let srArr = arr.forEach((el)=>{
//     console.log(object)
// })


  

// let numArr = [1,3,6]

// let sq = function(el){
//     return el**2
// }
 
// let sqNumArr = numArr.map(sq)
// console.log(sqNumArr) 






// let input = [1,2,3]
// let newInput = input.filter((el)=>{
//     return el%2!=0
// })





// let input = [2,3,4]
// let newInput = input.reduce((acc,el)=>{
//     return acc*el
// },1) 
// console.log(newInput)





// let arx = [1,2,3,4]
// let newArx = arx.filter((el)=>{
//     return el%2!=0
// }).reduce((acc,el)=>{
//    return acc+el
// })

// console.log(newArx)


// let arr = [1,2,3,4,5,6]
// let newArr = arr.filter((el)=>{
//     return el%3==0
// }).reduce((acc,el)=>{
//     return acc+el**3
// },0)

// console.log(newArr)


// let users = [
//     { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
//     { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
//     { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
//   ];


//   let res = users.map((el)=>{
//     // return(el.firstName+" "+el.lastName)
//     return(el.firstName,el.lastName)
//   })
//   console.log(res)



  let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];


  let newUsers = users.filter((el)=>{
    return el.place == "Banglore"
  }).map((el)=>{
    return el.firstName+" "+el.lastName
  })
  console.log(newUsers)