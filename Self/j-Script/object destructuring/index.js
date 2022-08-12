// simple object...

const bioData = {
     name:"vinod",
     age:"23",
     deg:"MSC",
 }

 console.log(`my name is ${bioData.name}`)  // abhi agr hume name chhaiye to likhna pad rha hai ki bioData.name



//   object destructuring 

const bioDatax = {
    name:"vin",
    age:234,
    deg:"MSCASD",
}

let {name,age,deg} = bioDatax // bas isi line se ye kitna simple ho gya dekho

console.log(`my name is ${name}. my age is ${age} and my deg is ${deg}`)



