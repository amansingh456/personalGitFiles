// reduce method
// sabka total chhaiye ho to....


const counts = [,1,2,3,4,5,6,5,43,2,1,]
function sumNum(accumlator,currentValue){ // ye ese hi likha jata hai reduce method me accumlator , currentValue
    return accumlator + currentValue
}
 const total = counts.reduce(sumNum) // ab yha hum initialvalue bhi de skte hai accumlator ki vese agr ni dege to fir to jitni usme likhi hogi vo utni hi lega lekin man lo apn yha comma lga kr 100 likh de to vo pehle 100 lega usme fir add karta jayega to fir total 172 ho jaeega iska

 console.log(total)










 // new example

 const userCart = [
     {productId: 1, productName: 'mobile', price: 12000},
     {productId: 2, productName: 'laptop', price: 62000},
     {productId: 3, productName: 'tv', price: 32000}
 ]
// ab apn ko inka total sum chhaiye vese to hum for loop ya baki or loop lga kr sakte hai lekin reduce se boht fast ho jata hai...

function sumX(totalPrice,currentProduct){
    return  totalPrice + currentProduct.price
}

 const finalAmount = userCart.reduce(sumX,0)// intial value 0 dal di hai..
 console.log(finalAmount)